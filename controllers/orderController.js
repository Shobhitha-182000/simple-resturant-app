const Order = require("../models/order");
const path=require('path');

exports.getDisplayOrderForm=(req,res,next)=>{
    res.sendFile(path.join(__dirname,'..','views','order.html'));
}

exports.postOrder=(req,res,next)=>{
    const price=req.body.price;
    const details=req.body.details;
    const category=req.body.category;
    Order.create({
        price:price,
        details:details,
        category:category
    }).then(order=>{
        res.redirect('/orders/add-order');
    })
    .catch(err=>console.log(err));
}
exports.getAllOrder=(req,res,next)=>{
    Order.findAll()
    .then(order=>{
        res.json(order);
    })
    .catch(err=>console.log(err));
}
exports.deleteOrder=(req,res,next)=>{
    const orderId=req.params.id;
    Order.destroy({where:{id:orderId}})
    .then(order=>{
        if(!order){
            res.status(404).json({ message: 'User not found.' }); 
            
        }else{
            res.json({ message: 'order deleted successfully.' });
        }
    })
    .catch(err=>console.log(err));

}
