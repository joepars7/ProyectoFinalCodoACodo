const path = require('path');

const adminControllers = {

    admin: (req, res) => {
        const data = [
            {
                product_id: 1,
                licence_name: "STAR WARS",
                category_name: "Figuras coleccionables",
                product_name: "STORMTROOPER LIGHTSABER",
                product_description: "Figura colleccionable Star Wars",
                product_price: 1799.99,
                dues: 3,
                product_SKU: "SW001001",
                img_front: "/img/star-wars/trooper-1.webp",
                img_back: "/img/star-wars/trooper-box.webp",

            },
            {
                product_id: 1,
                licence_name: "POKEMON",
                category_name: "Figuras coleccionables",
                product_name: "PIDGEOTTO",
                product_description: "Figura colleccionable Pokemon",
                product_price: 1799.99,
                dues: 3,
                product_SKU: "PKM001001",
                img_front: "/img/pokemon/pidgeotto-1.webp",
                img_back: "/img/pokemon/pidgeotto-box.webp",

            },
            {
                product_id: 1,
                licence_name: "HARRY POTTER",
                category_name: "Figuras coleccionables",
                product_name: "LUNA LOVEGOOD LIONMASK",
                product_description: "Figura colleccionable Harry Potter",
                product_price: 1799.99,
                dues: 3,
                product_SKU: "HP001001",
                img_front: "/img/harry-potter/luna-1.webp",
                img_back: "/img/harry-potter/luna-box.webp",
            },
        ] 

        res.render(path.resolve(__dirname, '../views/admin/admin.ejs'),{
            items: data
        })
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