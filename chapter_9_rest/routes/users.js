var express = require('express'),
    router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get( '/:id', function ( req, res, next ) {
  "use strict";
  res.send( {
    name : 'jake',
    age : req.params.id
  } );
} );




module.exports = router;
