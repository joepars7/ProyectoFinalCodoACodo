const path = require('path');
const authControllers = {

    
    login : (req, res) => {
        res.render(path.resolve(__dirname, '../views/auth/login.ejs'))
     },
    loginAccount: (req, res) => res.send('Route for Login'),
    register: (req, res) => {
        res.render(path.resolve(__dirname, '../views/auth/register.ejs'))
     },
    registration: (req, res) => res.send('Route for registration'),
    logout: (req, res) => res.send('Route for logout')
}

module.exports = authControllers;