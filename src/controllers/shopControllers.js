const path = require('path');

const shopControllers = {

    shop: (req, res) => {

        const data = [
            {
                product_id: 1,
                licence_name: "Pokemon",
                category_name: "Figuras coleccionables",
                product_name: "Pidgeotto",
                product_description: "Figura colleccionable Pokemon",
                product_price: 1799.99,
                dues: 10,
                product_SKU: "PKM001001",
                img_front: "/imgpokemon/pidgeotto-1.webp",
                img_back: "/imgpokemon/pidgeotto-box.webp"

            },
            {
                product_id: 1,
                licence_name: "Pokemon",
                category_name: "Figuras coleccionables",
                product_name: "Pidgeotto",
                product_description: "Figura colleccionable Pokemon",
                product_price: 1799.99,
                dues: 10,
                product_SKU: "PKM001001",
                img_front: "/imgpokemon/pidgeotto-1.webp",
                img_back: "/imgpokemon/pidgeotto-box.webp"

            },
            {
                product_id: 1,
                licence_name: "Pokemon",
                category_name: "Figuras coleccionables",
                product_name: "Pidgeotto",
                product_description: "Figura colleccionable Pokemon",
                product_price: 1799.99,
                dues: 10,
                product_SKU: "PKM001001",
                img_front: "/imgpokemon/pidgeotto-1.webp",
                img_back: "/imgpokemon/pidgeotto-box.webp"
            },
            {
                product_id: 1,
                licence_name: "Pokemon",
                category_name: "Figuras coleccionables",
                product_name: "Pidgeotto",
                product_description: "Figura colleccionable Pokemon",
                product_price: 1799.99,
                dues: 10,
                product_SKU: "PKM001001",
                img_front: "/imgpokemon/pidgeotto-1.webp",
                img_back: "/imgpokemon/pidgeotto-box.webp"
            },

            {
                product_id: 1,
                licence_name: "Pokemon",
                category_name: "Figuras coleccionables",
                product_name: "Pidgeotto",
                product_description: "Figura colleccionable Pokemon",
                product_price: 1799.99,
                dues: 10,
                product_SKU: "PKM001001",
                img_front: "/imgpokemon/pidgeotto-1.webp",
                img_back: "/imgpokemon/pidgeotto-box.webp"

            },
            {
                product_id: 1,
                licence_name: "Pokemon",
                category_name: "Figuras coleccionables",
                product_name: "Pidgeotto",
                product_description: "Figura colleccionable Pokemon",
                product_price: 1799.99,
                dues: 10,
                product_SKU: "PKM001001",
                img_front: "/imgpokemon/pidgeotto-1.webp",
                img_back: "/imgpokemon/pidgeotto-box.webp"

            },
            {
                product_id: 1,
                licence_name: "Pokemon",
                category_name: "Figuras coleccionables",
                product_name: "Pidgeotto",
                product_description: "Figura colleccionable Pokemon",
                product_price: 1799.99,
                dues: 10,
                product_SKU: "PKM001001",
                img_front: "/imgpokemon/pidgeotto-1.webp",
                img_back: "/imgpokemon/pidgeotto-box.webp"

            },
            {
                product_id: 1,
                licence_name: "Pokemon",
                category_name: "Figuras coleccionables",
                product_name: "Pidgeotto",
                product_description: "Figura colleccionable Pokemon",
                product_price: 1799.99,
                dues: 10,
                product_SKU: "PKM001001",
                img_front: "/imgpokemon/pidgeotto-1.webp",
                img_back: "/imgpokemon/pidgeotto-box.webp"

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