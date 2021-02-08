//initialis router
let router=require('express').Router()

//set default api response
router.get('/',function(req,res){
    res.json({
        status:'api is working',
        message:'welcome to the rest world'
    })
})

//import contact controller
var controller=require('./Controllers')

//contact routes
router.route('/contacts')
.get(controller.index)
.post(controller.new)

router.route('/contacts/:contact_id')
.get(controller.view)
.patch(controller.update)
.put(controller.update)
//.delete(controller.delete)

//export api routes
module.exports=router;