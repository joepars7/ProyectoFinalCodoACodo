const express = require('express');
const app = express();
const methodOverride = require('method-override');

const mainRoutes = require('./src/routes/mainRoutes')
const shopRoutes = require('./src/routes/shopRoutes')
const shopRoutes = require('./src/routes/adminRoutes')
const shopRoutes = require('./src/routes/authRoutes')

const PORT = 3004;

app.use(express.static('public'));
app.use(express.urlencoded());
app.use(express.json())
app.use(methodOverride('_method'));

app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/admin', authRoutes);

app.get('/ping', (req, res) => res.send('pong'));
app.listen(4000, () => console.log("Servidor corriendo en http://localhost:4000"));