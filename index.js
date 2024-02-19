const express = require('express');
const app = express();
const { check, validationResult } = require('express-validator');
const { validateCreateUser } = require('./validators/userValidators.js');


const {requireAuth} = require('./middlewares/requireAuth.js')

app.use(express.json());
//  ANROP -> 
//    om ej inloggad  -> 401
//     om ej valid -> 422 (RETURN)
//   vår funktion 


//app.post('/hello', validateCreateUser , userController.createUser);


app.get('/api/currentUserInfo', requireAuth, async (req,res)=>{
    let result = {

        name: 'Stefan',
        id:11112,
        age:52
    }
     res.json(result)
});





app.post('/hello', validateCreateUser ,
  (req, res) => {
    res.send(`Hello, ${req.body.name}!`);
});

app.listen(3000);