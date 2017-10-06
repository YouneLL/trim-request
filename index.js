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


// trimRequest middleware: trim all request object: body, params, query
var all = function ( req, res, next ) {

    trimStringProperties(req.body);
    trimStringProperties(req.params);
    trimStringProperties(req.query);

    next();

}

// trimBody middleware: trim only the body object
var body = function (req, res, next) {
    trimStringProperties(req.body);
    next();
}

var param = function (req, res, next) {
    trimStringProperties(req.body);
    next();
}

var query = function (req, res, next) {
    trimStringProperties(req.query);
    next();
}

module.exports = {
    all: all,
    body: body,
    param: param,
    query: query
};