const authControllers = {

    login:(req, res) => res.send('Route for Login View');
    loginAccount: (req, res) => res.send('Route for Login');
    register: (req, res) => res.send('Route for Register View');
    registration: (req, res) => res.send('Route for registration');
}

module.exports = authControllers;