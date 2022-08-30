const router = require ('express').Router ();
const notesRoutes = require ('./notesroute');


router.use ('/notes', notesRoutes);

module.exports = router;