# trim-request
Express middleware to trim all incoming request object

## Installation
```
npm install trim-request
```

## Usage

trim-request is very simple to use, just import the package and use one of its methods:

the all method will trim body, params and query objects in order

body will trim only the body object

param will trim the params object

and query method to trim the query string object 

```javascript
const trimRequest = require('trim-request');

app.post('/person', trimRequest.all, (req, res, next) => { 

    res.json(req.body);

});
```

if the client post:

```
{
    name: '  foo   ',
    age: 20,
}
```

the code above will return this object:

```
{
    name: 'foo',
    age: 20,
}
```

## License

MIT License

