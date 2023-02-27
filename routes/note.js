const { Router } = require('express');
const { comprobarTokenUsuario } = require('../helpers/jwt');
const { createNote,findAll,findOne,
    updateNote,deleteNote,deleteAllNote } = require('../controllers/note');

const router = Router();

// Crear nota
router.post('/createNote',createNote,comprobarTokenUsuario);
// Obtener todos los notas
router.get( '/findAll',findAll );
// Obtener un nota por id
router.get( '/:id',findOne );
// Actualizar un nota por id
router.put( '/:id',updateNote );
// Eliminar un nota por id
router.delete( '/:id',deleteNote );
// Eliminar todas las notas
router.delete( '/',deleteAllNote );
module.exports = router;