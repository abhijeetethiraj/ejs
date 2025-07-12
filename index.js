const express = require('express')
const path = require('path')
const app = express()

const fs = require('fs')

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))
app.use('/public', express.static(path.join(__dirname, 'public')));


const user = JSON.parse(fs.readFileSync('./data/user.json','utf-8'))

app.get('/', (req,res) =>{

  res.render('index',{user});
})

app.get('/contact',(req,res) =>{
  res.render('contact')
})
app.listen(3000, ()=>{
  console.log('Server running at http://localhost:3000');
})