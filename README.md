# trim-request
Express middleware to trim all incoming request object

## Installation
```
npm install trim-request
```

## Usage

trim-request is very simple to use, just import the package and use one of its methods:

`trimRequest.all`  trim body, params and query objects

`trimRequest.body` trim only the body object

`trimRequest.param` trim the params object

`trimRequest.query` trim the query string object 

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

