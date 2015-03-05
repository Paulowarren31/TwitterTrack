var express  = require('express')
var Twit = require('twit')
var cors= require('cors')
var app = express()

app.use(cors())

var T = new Twit({
  consumer_key:         '22KFdhgYCXEEPzHjGQgxGnkgz'
  , consumer_secret:      'wYHi5oEtdfse8CVtmAfGx7cccTtoi5i5v26fWSAFubZAj5NM9l'
  , access_token:         '413632344-XNgg9JZX1aBbk3cltULhhBc02d4bvJIfyKlAYWJV'
  , access_token_secret:  'fos4lIm0rUxpiBtbhJe1QsFWENbMAVzNQoKnsU1AyfqpD'
})


app.get('/api/search/:srch',function(req,res){
  T.get('statuses/user_timeline',{screen_name:req.params.srch},function(err,reply){
    res.send(reply)
  })
})


app.listen(process.env.PORT)

console.log("App listening on port 8081")
