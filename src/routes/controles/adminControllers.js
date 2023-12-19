const adminControllers = {

    admin: (req, res) => res.send('Route for Admin View');
    create: (req, res) => res.send('Route for create Admin View');
    createAdmin: (req, res) => res.send('Route for creating Admin');
    editIDView: (req, res) => res.send('Route for find an ID');
    editID: (req, res) => res.send('Route for find and edit an ID');
    delete: (req, res) => res.send('Route for deleating ID');

}

module.exports = adminControllers;