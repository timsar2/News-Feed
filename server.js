// server.js
const { database } = require('faker');
const jsonServer = require('json-server');
// const cors = require('cors'); // npm install --save cors
const server = jsonServer.create()
const router = jsonServer.router('./db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)

// ----------------------------------------------- custom route -----------------------------------------------------------//
// Add custom routes before JSON Server router

server.use('/getUsers', (req, res) => {
    var users = getUsers(req);
    if(users != ''){
        return res.jsonp(users)
    }
    else {
        return res.sendStatus(400)
    }
})

server.get('/login/*', (req, res) => {
    var loginInfo = getLoginInfo(req);
    if(loginInfo != ''){
        return res.status(200).jsonp(loginInfo);
    }
    else {
        return res.sendStatus(400)
    }    
})

server.post('/likes', (req, res) => {    
    var db = router.db;

    var user = getUserFromToken(req);    
    if(user == '') { return res.sendStatus(400) }
    
    var newsId = req.body.newsId;
    var createdTime = new Date().toJSON();
    var imgUrl = getNewsImgUrl(newsId);         
    var likes = {
        "id": uuidv4(),
        "userId": user.id,
        "newsId": newsId
    }

    var id = getResAsJson(db.get('likes').filter(o => o.userId == user.id && o.newsId == newsId).map(x => x.id));
    if(id != ''){
        db.get('likes').removeById(id.toString()).value();
        db.write();     // commit changed      
        newsId = '0';
    }else {        
        // Add a like
        db.get('likes').unshift(likes).write();     // commit changed
        createNewsFeed(newsId, imgUrl, user, createdTime, "Liked This News"); 
    }
    
    return res.jsonp({ newsId })        
})

server.post('/news', (req, res) => {
        var user;
        var db = router.db;
        var newsId = uuidv4() + Date.now();
        var createdTime = new Date().toJSON();

        user = getUserFromToken(req);
        if(user == '') { return res.sendStatus(400) }

        var news = {
            id: newsId,
            createdBy: user.id,
            createdTime: createdTime,
            subject: req.body.subject,
            content: req.body.content,
            imgUrl: req.body.imgUrl
        }
                        
        //** post news */
        db.get('news')
        .unshift(news)
        .write();

        createNewsFeed(newsId, req.body.imgUrl, user, createdTime, "Posted A News");

        return res.status(200).jsonp(news);
})

// ----------------------------------------------^^^^ custom route ^^^^-------------------------------------------------------------//

server.use((req, res, next) => {
    next();
})
// ------------------------------------------------ default authorization method   ------------------------------------------>
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
// ------------------------------------------^^^^ default authorization method   ^^^^------------------------------------------>

server.use(router)

server.listen(3000, () => {
    console.log('JSON Server is running')
})

function isAuthorized(req){
    return true;
    if(req.header("Authorization") == undefined){ return false; }
    return true;
}

function getNewsImgUrl(newsId){
    var db = router.db;
    var imgUrl = getResAsJson(db.get('news').filter(o => o.id == newsId).map(x => x.imgUrl));  
    return imgUrl.toString();
}

function createNewsFeed(newsId, imgUrl, user, createdTime, userActivity){
    
    var newsFeed = {
        "id": uuidv4() + Date.now(),
        "newsId": newsId,
        "imgUrl": imgUrl,
        "createdTime": createdTime,
        "createdBy": user.id,
        "fullName": user.fullName,
        "userActivity": userActivity
        
    }
    var db = router.db;

    // Add a post
    db.get('newsFeed')
    .unshift(newsFeed)
    .write()

}

function getUserFromToken(req){
    var token = req.header("Authorization").replace('Bearer ', '');
    var db = router.db;

    var userId = db.get('token').filter(t => t.id == token).map(elm => elm.userId).toString();
    if(userId == '' ){ return '';}

    var users = getResAsJson(db.get('users').filter(u => u.id == userId));
    if(users.length == 0 ){ return '';}

    return users[0];
}


function getUsers(req){
    var db = require('./db.json');
    var users = db.users;
    return Object.assign({list: users}, {selectedUser: {}});
}

function getLoginInfo(req){
    var db = router.db;    
    var userName = req.params['0'];
    if (userName == '') { return '' };
    
    var users = getResAsJson(db.get('users').filter(u => u.userName == userName));
    if(users.length == 0 ){ return '';}

    var token = db.get('token').filter(t => t.userId == users[0].id).map(elm => elm.id).toString();
    if(token == ''){ return '';}

    var likes = getResAsJson(db.get('likes').filter(u => u.userId == users[0].id).map(elm => elm.newsId));
    return Object.assign({loginInfo: users[0]}, {userLike: {news: likes}}, {token: token});
}

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

function getResAsJson(jsonObj){
    return JSON.parse(JSON.stringify(jsonObj))
}