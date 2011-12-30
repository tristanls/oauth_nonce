/*
 * oauth_nonce.js : generate oauth_nonce
 *
 * (C) 2011 Tristan Slominski
 */
 
var crypto = require( 'crypto' );

var normalize = function ( bytes ) {
  
  return bytes.toString( 'base64' ).replace( /[^\w]/g, '' );
  
}; // normalize

module.exports = function ( callback ) {
  
  if ( callback && typeof callback === 'function' ) {
    
    crypto.randomBytes( 32, function ( ex, bytes ) {
      
      if ( ex ) throw ex;
      
      callback( normalize( bytes ) );
      
    }); // randomBytes
    
  } else {
    
    return normalize( crypto.randomBytes( 32 ) );
    
  } // no callback
  
}; // oauth_nonce