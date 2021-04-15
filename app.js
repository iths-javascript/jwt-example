const jwt = require('jsonwebtoken')
const express = require('express')
const app = express()
const Auth = require('./middleware/auth')

require('dotenv').config()

app.use( express.json() )

app.post('/auth', (req,res) => {
  if(req.body.username == 'grillkorv' && req.body.password == 'bananpaj'){
    const payload = {username: req.body.username}
    const token = jwt.sign(payload, process.env.JWT_SECRET)
    res.json({token})
  }else{
    res.json({error:'You done goofed'})
  }
})


app.get('/protected', Auth.userAuth, (req,res) => {
  console.log(req.user);
  res.json({message: `You got access Mr. ${req.user.username}`})
})


app.get('/protected-1', Auth.userAuth, (req,res) => {
  console.log(req.user);
  res.json({message: 'Access!'})
})


app.get('/protected-2', Auth.userAuth, (req,res) => {
  console.log(req.user);
  res.json({message: 'Access!'})
})



app.listen(process.env.PORT || 5000, () => console.log("is on"))


