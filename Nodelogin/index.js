const express = require('express');
const cors = require('cors');
require('./config');


const bcrypt = require('bcrypt');
const User = require('./User');
const app = express();
app.use(express.json())
app.use(cors())


app.post('/register', async(req,res)=>{
      let user = new User(req.body);
      let result =  await user.save();
       result =  result.toObject();
       delete result.password;
      console.log(req.body);
      res.send(result);   
})


app.post('/login', async  (req, res) => {
   console.log(req.body);
   if(req.body.password && req.body.email){
    let user = await User.findOne(req.body).select('-password');
    if(user){
        res.send(user);
    } else{
        res.send({result:'No User Found'})
    } 
   } else {
    res.send({result:'no user found'})
   }
})


// app.delete('/deleteUser/:id', async(req,res)=>{
//     let data = await User.deleteOne({_id:req.params.id})
//     res.send(data)
// })

// app.put('/updateUser/:id', async(req,res)=>{
//    let data =  await User.updateOne({_id:req.params.id},{
//         $set:req.body
//     })
//     res.send(data)
// })


app.listen(3001);