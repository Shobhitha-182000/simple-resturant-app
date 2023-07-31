const express=require('express');
const router=express.Router();
const orderController=require('../controllers/orderController');

router.get('/add-order',orderController.getDisplayOrderForm);
router.get('/all-order',orderController.getAllOrder);
router.post('/add-order',orderController.postOrder);

router.delete('/delete-order/:id',orderController.deleteOrder);
// router.get('/delete-order/:id',orderController.deleteOrder);



module.exports=router;