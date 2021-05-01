// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
var user = "";
server.use(middlewares)
server.use((req, res, next) => {
    if (isAuthorized(req)) { // add your authorization logic here
        // user = readToken(req);
        // if(user == '') { return res.sendStatus(401);}
        next() // continue to JSON Server router
    } else {
        res.sendStatus(401)
    }
})

 // Add custom routes before JSON Server router
server.get('/tokens', (req, res) => {
    res.jsonp(req.query)
})

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
    console.log('body parser ' + user.id);
    if (req.method === 'POST') {
        req.body.createdAt = Date.now();
        // req.body.createdBy = user.id;
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

function readToken(req){
    var token = req.header("Authorization").replace('Bearer ', '');
    var db = require('./db.json');
    var userId = db.tokens.filter(u => u.token == token).map(elm => elm.id);
    if(userId.length == 0){ return '';}
    var user = db.users.filter(u => u.id == userId[0]);
    return user[0];
}