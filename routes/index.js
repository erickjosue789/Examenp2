var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/materias', function(req, res, next) {
  res.render('materias', { title: 'Materias' });
});

router.get('/materia/new', function(req, res, next) {
  res.render('crearmaterias', { title: 'Nueva materia' });
});



module.exports = router;
