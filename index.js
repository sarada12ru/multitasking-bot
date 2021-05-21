const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const cors = require( 'cors' );
const path = require('path');

//Routes
const webPageRoutes = require( './src/modules/webpage/route' );

//Utils
const httpHelper = require( './src/core/utils/httpHelpers' );

//Configuring EJS
app.set('view engine', 'ejs');


//Setting up the directory
const static_path = path.join(__dirname, 'src');
app.use(express.static(static_path));


//Configuring Routers
app.use( '/', webPageRoutes );


//Configuring Cors
app.use( cors( { origin: '*' } ) );



//Http Responses

app.use( ( req, res ) => {
    console.log( 'error >> Request ' + req.path + ' could not be handled by any existing routes.' );
    res.status( 500 );

    httpHelper.sendAckResponse( res, new Error( "Invalid API Access Request" ), null );
} );

app.use( ( err, req, res, next ) => {
    if ( res.headersSent ) {
        return next( err );
    }
    console.log( 'error >> Server errorHandler Function :' + err.message );

    res.status( 500 );

    httpHelper.sendAckResponse( res, err, null );
} );



//Server Configuration
app.listen(port, () => {
    console.log( `App Listen On PORT ${ port }` )
})