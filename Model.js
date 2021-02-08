var mongoose=require('mongoose')
//schema
var schema=mongoose.Schema({
    name:{
        type:'string',
        required:true
    },
    email:{
        type:'string',
        required:true
    },
    gender:String,
    phone:String,
    create_date:{
        type:Date,
        default:Date.now
    } 
})
//export contact
var contact=module.exports=mongoose.model('contact',schema)

module.exports.get=function(callback,limit){
    contact.find(callback).limit(limit)
}