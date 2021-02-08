//import model
contact=require('./Model')
//handle index actions
exports.index=function(req,res){
    contact.get(function(err,contacts){
        if(err){
            res.json({
                status:'error',
                message:err
            })
        }
        res.json({
            status:'success',
            message:'contacts retrieved',
            data:contacts
        })
    })
}
//handel create contact actions
exports.new=function(req,res){
    var contact=new Contact()
    contact.name=req.body.name?req.body.name:contact.name
    contact.gender=req.body.gender
    contact.email=req.body.email
    contact.phone=req.body.phone

    //save and chck for errors
    contact.save(function(err){
        res.json({
            message:'new contact created',
            data:contact
        })
    })

}

//handle view contact info
exports.view=function(req,res){
    contact.findbyid(req.params.contact_id,function(err,contact){
        if(err){
            res.send(err)
        }
        res.json({
            message:'contact details loading..',
            data:contact
        })
    })
}

//handle update contact info
exports.update=function(req,res){
    contact.findbyid(req.params.contact_id,function(err,contact){
        if(err){
            res.send(err)
        }
        contact.name=req.body.name?req.body.name:contact.name
        contact.gender=req.body.gender
        contact.email=req.body.email
        contact.phone=req.body.phone
        
     //save the contact and cchk for error
     contact.save(function(err){
         if(err){
             res.send(err)
         }  
         res.json({
             message:'contact info updated',
             data:contact

         })
     })   

        })
    //handle delete contact
    exports.delete=function(req,res){
        contact.remove({
            id:req.params.contact_id
        },function(err,contact){
            if(err)
            res.send(err)
            res.json({
                status:'success',
                message:'contact deleted'
            })   
        })
        
    }
}