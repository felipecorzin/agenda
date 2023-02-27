const { Router } = require('express');
const { createTransaction,findAll,findOne,
    updateTransaction,deleteTransaction,
    deleteAllTransaction } = require('../controllers/transaction');

const router = Router();

// Crear nota
router.post('/createTransaction',createTransaction);
// Obtener todos los notas
router.get( '/findAll',findAll );
// Obtener un nota por id
router.get( '/:id',findOne );
// Actualizar un nota por id
router.put( '/:id',updateTransaction );
// Eliminar un nota por id
router.delete( '/:id',deleteTransaction );
// Eliminar todas las notas
router.delete( '/',deleteAllTransaction );
module.exports = router;