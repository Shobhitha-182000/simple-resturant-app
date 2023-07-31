const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const sequelize = require('./util/database');
const order = require('./models/order');
const orderRoutes=require('./routes/orderRoutes');
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));
app.use('/orders',orderRoutes);
 
sequelize.sync({force:true})
.then(result=>{
    app.listen(3000,()=>{
        console.log('3000 port started...')
    })
}).catch(err=>console.log(err));