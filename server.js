// server.js
const jsonServer = require('json-server');
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
var user = "";
server.use(middlewares)
server.use((req, res, next) => {
    if (isAuthorized(req)) { // add your authorization logic here
        // user = getUserFromToken(req);
        // if(user == '') { return res.sendStatus(401);}
        next() // continue to JSON Server router
    } else {
        res.sendStatus(401)
    }
})

 // Add custom routes before JSON Server router
server.get('/login/*', (req, res) => {
    var loginInfo = getLoginInfo(req);
    if(loginInfo != ''){
        res.send(loginInfo);
    }
    else {
        res.sendStatus(400)
    }    
})

server.get('/getUsers', (req, res) => {
    var users = getUsers(req);
    if(users != ''){
        res.jsonp(users)
    }
    else {
        res.sendStatus(400)
    }    
})


// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
    var user;
    if (req.method === 'POST') {
        user = getUserFromToken(req);
        if(user == '') { res.sendStatus(400) }
    }

    if(req.url == '/news' && req.method == 'POST'){
            req.body.id = uuidv4();
            req.body.createBy = user.id;
            req.body.createdTime = new Date().toJSON();
            
            createNewsFeed(req, user, "Posted A News");
    }

    if(req.url == '/likes' && req.method === 'POST'){
        req.body.userId = user.id;
    } 
    
    // Continue to JSON Server router
    next()
})


server.use(router)

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

function createNewsFeed(req, user, userActivity){
    var db2 = require('./db.json');
    var newsFeed = {
        "id": uuidv4(),
        "newsId": req.body.id,
        "imgUrl": req.body.imgUrl,
        "createdTime": req.body.createdTime,
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

    return Object.assign({loginInfo: user[0]}, {userLike: likes}, {token: token[0]});
}

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}