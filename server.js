// server.js
const { date, database } = require('faker');
const jsonServer = require('json-server');
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)

// ----------------------------------------------- custom route -----------------------------------------------------------//
// Add custom routes before JSON Server router
server.use('/getUsers', (req, res) => {
    getUsersRoute(req, res);
})

server.get('/login/*', (req, res) => {
    var loginInfo = getLoginInfo(req);
    if(loginInfo != ''){
        res.status(200).send(loginInfo);
    }
    else {
        res.sendStatus(400)
    }    
})

server.post('/likes', (req, res) => {
    if(req.method != 'POST') { return }
    
    var user = getUserFromToken(req);
    if(user == '') { res.sendStatus(400) }
    var newsId = req.body.newsId;
    var imgUrl = getNewsImgUrl(newsId);
    if (imgUrl == '' || imgUrl == undefined) { res.sendStatus(400) }
    var createdTime = new Date().toJSON();
    
    var likes = {
        "id": uuidv4(),
        "userId": user.id,
        "newsId": newsId
    }

    db = router.db;

    var obj = db.get('likes').filter(o => o.userId == user.id && o.newsId == newsId).map(x => x.id);
    var ids = JSON.parse(JSON.stringify(obj));

    if(ids.length > 0){
        db.get('likes').removeById(ids[0]).value();
        // res.setHeader("Content-Type", "application/json");
        newsId = '0';
    }else {
        // Add a like
        db.get('likes')
        .push(likes)
        .write();
        createNewsFeed(newsId, imgUrl, user, createdTime, "Liked This News");
        // res.setHeader("Content-Type", "application/json");            
    }
    return res.status(200).jsonp({ newsId })        
})

server.post('/news', (req, res) => {
        var user;
        user = getUserFromToken(req);
        if(user == '') { res.sendStatus(400) }
        var newsId = uuidv4() + Date.now();
        var createdTime = new Date().toJSON();
        // req.body.id = newsId
        // req.body.createBy = user.id;
        // req.body.createdTime = createdTime;
        var news = {
            id: newsId,
            createdBy: user.id,
            createdTime: createdTime,
            subject: req.body.subject,
            content: req.body.content,
            imgUrl: req.body.imgUrl
        }
        var db = router.db;
        //** post news */
        db.get('news')
        .push(news)
        .write();
        createNewsFeed(newsId, req.body.imgUrl, user, createdTime, "Posted A News");
        return res.status(200).jsonp(news);
})
// ----------------------------------------------^^^^ custom route ^^^^-------------------------------------------------------------//

// server.use((req, res, next) => {
//     console.log('second');
//     if (isAuthorized(req)) { // add your authorization logic here
//         // user = getUserFromToken(req);
//         // if(user == '') { return res.sendStatus(401);}
//         next() // continue to JSON Server router
//     } else {
//         return res.sendStatus(401)
//     }
// })
server.use(router)

function getUsersRoute(req, res){
    var users = getUsers(req);
    if(users != ''){
        res.status(200).jsonp(users)
    }
    else {
        res.sendStatus(400)
    }
}
// server.use((req, res, next) => {    
//     if(req.url == '/news' && req.method == 'POST'){
//         var user;
//         user = getUserFromToken(req);
//         if(user == '') { res.sendStatus(400) }
//         var newsId = uuidv4() + Date.now();
//         var createdTime = new Date().toJSON();
//         req.body.id = newsId
//         req.body.createBy = user.id;
//         req.body.createdTime = createdTime;
//         // var news = {
//         //     id: newsId,
//         //     createdBy: user.id,
//         //     createdTime: createdTime,
//         //     subject: req.body.subject,
//         //     content: req.body.content,
//         //     imgUrl: req.body.imgUrl
//         // }
//         // var db = router.db;
//         // //** post news */
//         // db.get('news')
//         // .push(news)
//         // .write();
//         createNewsFeed(newsId, req.body.imgUrl, user, createdTime, "Posted A News");
//         // router.render = function (req, res) {
//         //     res.jsonp(news);
//         // };
//     }

//     // Continue to JSON Server router
//     next()
// })




// router.render = (req, res) => {
//   res.jsonp({
//     body: res.locals.data
//   })
// }
server.listen(3000, () => {
    console.log('JSON Server is running')
})


function isAuthorized(req){
    return true;
    if(req.header("Authorization") == undefined){ return false; }
    return true;
}

function getNewsImgUrl(newsId){
    db = require('./db.json');
    var imgUrl = db.news.filter(o => o.id == newsId).map(x => x.imgUrl);
    return imgUrl[0];
}

function createNewsFeed(newsId, imgUrl, user, createdTime, userActivity){
    
    var newsFeed = {
        "id": uuidv4() + database.now,
        "newsId": newsId,
        "imgUrl": imgUrl,
        "createdTime": createdTime,
        "createdBy": user.id,
        "fullName": user.fullName,
        "userActivity": userActivity
        
    }
    db = router.db;

    // Add a post
    db.get('newsFeed')
    .push(newsFeed)
    .write()

}

function getUserFromToken(req){
    var token = req.header("Authorization").replace('Bearer ', '');
    var db = require('./db.json');
    
    var userId = db.token.filter(u => u.id == token).map(elm => elm.userId);
    if(userId.length == 0){ return '';}
    var user = db.users.filter(u => u.id == userId[0]);
    return user[0];
}


function getUsers(req){
    var db = require('./db.json');

    var userName = req.params['0'];
    if (userName == '') { return '' };
    
    var users = db.users;

    return Object.assign({list: users}, {selectedUser: {}});
}

function getLoginInfo(req){
    var db = require('./db.json');
    
    var userName = req.params['0'];
    if (userName == '') { return '' };
    
    var user = db.users.filter(u => u.userName == userName);
    if(user.length == 0){ return '';}

    var token = db.token.filter(u => u.userId == user[0].id).map(elm => elm.id);
    if(token.length == 0){ return '';}

    var likes = db.likes.filter(u => u.userId == user[0].id).map(elm => elm.newsId);
    
    return Object.assign({loginInfo: user[0]}, {userLike: {news: likes}}, {token: token[0]});
}

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}