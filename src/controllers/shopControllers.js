const path = require('path');

const shopControllers = {

    shop: (req, res) => {

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

        res.render(path.resolve(__dirname, '../views/shop/shop.ejs'),{
            items: data
        })
    },
    itemID: (req, res) => {
        res.render(path.resolve(__dirname, '../views/shop/item.ejs'))
    },

    addItem: (req, res) => res.send('Route for add the current item to the shop cart'),
    cart: (req, res) => res.send('Route for Cart View'),
    addCart: (req, res) => res.send('Route for go to checkout page'),
}

module.exports = shopControllers;