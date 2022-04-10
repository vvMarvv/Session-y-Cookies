const { check } = require('express-validator')

module.exports = [
    check("name")
    .notEmpty()
    .withMessage("Campo requerido"),
    check("color")
    .notEmpty()
    .withMessage("Campo requerido"),
    check("email")
    .notEmpty()
    .isEmail()
    .withMessage("Ingrese un email válido"),

    check("age")
    .isNumeric()
    .withMessage("Sólo números")
    

]