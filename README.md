## oauth_nonce v1.0.0

_for Node.js_

## usage

```javascript
var oauth_nonce = require( 'oauth_nonce' );

// async-ish
oauth_nonce( function( value ) {
  // do stuff with it
  console.log( value );
});

// sync
var value = ouath_nonce();
```