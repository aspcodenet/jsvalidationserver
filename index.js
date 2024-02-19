const express = require('express');
const app = express();
const { check, validationResult } = require('express-validator');


app.use(express.json());
//  ANROP -> 
//    om ej inloggad  -> 401
//     om ej valid -> 422
//   vår funktion 


app.post('/hello',  
    check('name').notEmpty().withMessage('Cant be empty'), 
    check('email').isEmail().withMessage('Not an email address'),
  (req, res) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
        res.send(`Hello, ${req.body.name}!`);
    }else{
        res.status(422).send({ errors: result.array() });
    }
});

app.listen(3000);