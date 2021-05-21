const express = require( 'express' );
const router = express.Router();

//Index Page
router.get( '/' , ( req, res, next ) => {

    console.log( "Calling Index Page" )

    res.render('index');

} )



module.exports = router;