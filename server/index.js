var express = require("express");
var mongoose = require("mongoose");
var users = require("./routers/users");
var admin = require("./routers/admin");
var tools = require("./routers/tools");
var app = express();
// var GoogleStrategy = require('passport-google-oauth20').Strategy;
// var createError = require('http-errors');
// const session = require('express-session');

var cors = require("cors");
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(session({
//   resave: false,
//   saveUninitialized: true,
//   secret: 'SECRET'
// }));

// app.get('/', function(req, res) {
//   res.render('pages/auth');
// });
// const passport = require('passport');
// var userProfile;

// app.use(passport.initialize());

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET , PUT , POST , DELETE");
//   res.header("Access-Control-Allow-Headers", "Content-Type, x-requested-with");
//   next(); // Important
// })
// app.get('/google',passport.authenticate('google', { scope : ['profile', 'email'] }))

// app.get('/sucess', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {

// console.log('hhhhhhhh');
//   res.redirect('http://localhost:4200');
// })

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });
// passport.serializeUser((user, done) => {
//     done(null, user.id);
// })

// passport.deserializeUser((user, done) => {
//     done(null, user);
// })

// passport.use(new GoogleStrategy({
//     clientID: '1032421990118-qmdf404tpdr25pc22kooarn5aqpfuldd.apps.googleusercontent.com',
//     clientSecret: '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',
//     callbackURL: "http://localhost:4200/sucess"},
//   function(accessToken, refreshToken, profile, cb) {
//     // Register user here.

//     console.log(profile);
// 	cb(null, profile);

// }
// ));
// app.get('http:localhost:5000/google/callback',(req,res)=>{res.end("hi")})
app.use("/users", users);
app.use("/admin", admin);
app.use("/tools", tools);

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/rentingTools");
app.listen(port, function () {
	console.log(`listening on port http://localhost:${port} !`);
});
