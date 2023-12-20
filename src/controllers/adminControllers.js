const path = require('path');

const adminControllers = {

    admin: (req, res) => {
        res.render(path.resolve(__dirname, '../views/admin/admin.ejs'))
     },
    create: (req, res) => {
        res.render(path.resolve(__dirname, '../views/admin/create.ejs'))
     },
    createAdmin: (req, res) => res.send('Route for creating Admin'),
    editIDView: (req, res) => {
        res.render(path.resolve(__dirname, '../views/admin/edit.ejs'))
     },
    editID: (req, res) => res.send('Route for find and edit an ID'),
    deleteID: (req, res) => res.send('Route for deleating ID'),

}

module.exports = adminControllers;