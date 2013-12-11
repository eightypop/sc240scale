# tanita-scale

Provides a usb interface for the Tanita SC-240 scale.

## Getting Started
Install the module with: `npm install tanita-scale`

Since Tanita doesn't publish the input interface, all you get is the results of a scale event.

```javascript
var scale = require('tanita-scale');

scale.on('data', function(data){
	console.log('scale data received');
	console.log(data);
});

console.log('ready to go');

```

## Documentation
Data output follows the table in the SC-240 manual which can be found here: http://www.tanita.com/es/sc-240/

## Examples
_(Coming soon)_

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
not yet
## License
Copyright (c) 2013 Matt Thompson. Licensed under the MIT license.
