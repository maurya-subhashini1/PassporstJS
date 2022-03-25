const express=require("express")
const passport=require("passport")

const app=express()

var FacebookStrategy = require('passport-facebook').Strategy;

// var GoogleStrategy
passport.use(new FacebookStrategy({
    clientID: "922214401786995",
    clientSecret: "578b9499161a57f0db9811dbd2f7a5f0",
    callbackURL: "http://localhost:3000/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    // User.findOrCreate({ facebookId: profile.id }, function (err, user) {
    //   return cb();
    // });
    console.log(profile);
    return cb()
  }
));


app.get('/auth/facebook',
  passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

  app.listen(3000,()=>{
    console.log("server runing succsessfuly..")
})