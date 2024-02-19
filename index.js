const express = require('express');
const app = express();
const { check, validationResult } = require('express-validator');
const { validateCreateUser } = require('./validators/userValidators.js');


app.use(express.json());
//  ANROP -> 
//    om ej inloggad  -> 401
//     om ej valid -> 422
//   vår funktion 


//app.post('/hello', validateCreateUser , userController.createUser);



app.post('/hello', validateCreateUser ,
  (req, res) => {
    res.send(`Hello, ${req.body.name}!`);
});

app.listen(3000);