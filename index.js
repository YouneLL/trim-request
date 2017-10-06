

// trim all string prpoerties of an object

function trimStringProperties (obj) {

    if (obj !== null && typeof obj === 'object') {

        for ( var prop in obj ) {

            // exclude properties in the prototype
            if ( obj.hasOwnProperty(prop) ) {

                // if the property is an object trim it too
                if ( typeof obj[prop] === 'object' ) {
                    return trimStringProperties(obj[prop]);
                } 
                
                // if it's a string remove begin and end whitespaces
                if ( typeof obj[prop] === 'string' ) {
                    obj[prop].trim();
                }

            }

        }

    }

}


var trimRequest = function ( req, res, next ) {

    trimStringProperties

}