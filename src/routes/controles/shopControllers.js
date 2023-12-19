const shopControllers = {

shop : (req, res) => res.send('Route for Shop View');
itemID : (req, res) => res.send('Route for find and retrieve a product form an ID');
addItem : (req, res) => res.send('Route for add the current item to the shop cart');
cart : (req, res) => res.send('Route for Cart View');
addCart: (req, res) => res.send('Route for go to checkout page');

}

module.exports = shopControllers;