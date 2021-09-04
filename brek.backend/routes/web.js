const SignInController = require("../controllers/signinController");
const Data = require("../model/userdata");
const jwt = require("jsonwebtoken");
const authenticate = require("../middleware/authenticate");
const TravelController = require("../controllers/travelContoller");

const initRoute = (app) => {

    app.get('/', (req, res) => {
        res.status(400).json({message: 'Home Page!'});
    });
    
    app.get('/another',authenticate, SignInController().singIn);
    app.post('/signup', SignInController().signUp);
    app.post('/signin', SignInController().PostsignIn);
    app.post('/userTravelData',TravelController().travelDataPost);
}

module.exports = initRoute;