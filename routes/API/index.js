const router = require ('express').Router ();
const notesRoutes = require ('./notesroute');

// Route is prefixed with --> "/api"
router.use ('/notes', notesRoutes);

module.exports = router;