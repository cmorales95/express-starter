const express = require('express');
const router = express.Router();

module.exports = () => {
    router.get('/', (req, res) => {
        res.render('index', {
            nombrePagina: 'Bienvenido',
        });
    });

    return router;
}



