const SignInController = require("../controllers/signinController");
const Data = require("../model/userdata");
const jwt = require("jsonwebtoken");
const authenticate = require("../middleware/authenticate");
const TravelController = require("../controllers/travelContoller");

const initRoute = (app) => {
    
    app.get('/',SignInController().Home);
    app.get('/another',authenticate, SignInController().singIn);
    app.post('/signup', SignInController().signUp);
    app.post('/signin', SignInController().PostsignIn);
    app.post('/userTravelData',TravelController().travelDataPost);
    app.get('/userdata',authenticate,TravelController().userdata);
    app.post('/emailonly',TravelController().emailOnly);
}

module.exports = initRoute;