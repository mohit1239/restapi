//import routes
let apiRoutes=require('./api-routes')
//import express
let express=require("express")
//initalise the app
let app=express()
//usse api routes in the app
app.use('/api',apiRoutes)
//import prser
let bodyParser=require('body-parser')
//import mongose
let mongoose=require('mongoose')
const { urlencoded } = require('body-parser')
//configure body parser to handle post request
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(bodyParser.json())
//connect to mongoose and set connection variable
mongoose.connect('mongodb://localhost/restapi',{useNewUrlParser:true,useUnifiedTopology:true})
var db= mongoose.connection
if(!db){
    console.log('error connecting db')
}
else{
    console.log('db connected')
}
//setup port
var port=process.env.PORT || 3000;
//send msg for deafult url
app.get('/',(req,res)=> res.send('we r here , u will be identified now for the sake of humanity'))
//launch app to liten on specified port
app.listen(port,function(){
    console.log(`this is running on anony port no.${port}` )
})
