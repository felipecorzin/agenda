const { Router } = require('express');
const { createWallet,findAll,findOne,
    deleteWallet,deleteAllWallet } = require('../controllers/wallet');

const router = Router();

// Crear nota
router.post('/createWallet',createWallet);
// Obtener todos los notas
router.get( '/findAll',findAll );
// Obtener un nota por id
router.get( '/:id',findOne );
// Eliminar un nota por id
router.delete( '/:id',deleteWallet );
// Eliminar todas las notas
router.delete( '/',deleteAllWallet );
module.exports = router;