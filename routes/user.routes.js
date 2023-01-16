const Router=require('express');
const userController = require('../controller/user.controller');
const router=new Router();

router.post('/user',userController.createUser);
router.get('/user',userController.getUsers);
router.get('/user:id',userController.getOneUser);
router.put('/user',userController.udateUser);
router.delete('/user:id',userController.deleteUser);





module.exports=router;