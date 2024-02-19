const {check, validationResult} = require('express-validator');

const validateCreateUser = [
    check('email')
      .trim()
      .normalizeEmail()
      .not()
      .isEmpty()
      .withMessage('Invalid email address!')
      .bail(),
  check('password')
      .trim()
      .not()
      .isEmpty()
      .withMessage('Password name can not be empty!')
      .bail()
      .isLength({min: 8})
      .withMessage('Minimum 8 characters required!')
      .bail(),
  
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty())
        return res.status(422).json({errors: errors.array()});
      next();
    },
  ];

module.exports = {
    //validateLoginUser,
    validateCreateUser
}






