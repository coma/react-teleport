react-teleport
==============

[![Build Status](https://travis-ci.org/coma/react-teleport.png?branch=master)](https://travis-ci.org/coma/react-teleport)
[![Dependency Status](https://david-dm.org/coma/react-teleport.png)](http://david-dm.org/coma/react-teleport)
[![NPM version](https://badge.fury.io/js/react-teleport.png)](http://badge.fury.io/js/react-teleport)

A neat way of handling views on other components

Usage
-----

Just mount a destination on one of your components:

```javascript
var React       = require('react'),
	Destination = require('react-teleport').Destination;

module.exports = module.exports = React.createClass({
	render: function () {

		return (
			<div>
				<Destination name="header"/>
			</div>
		);
	}
});
```

and then send an element from another:

```javascript
var React  = require('react'),
	Portal = require('react-teleport').Portal;

module.exports = module.exports = React.createClass({
	render: function () {

		return (
			<div>
				<Portal destination="header">
				    <nav>
				        <a href="#">some</a>
				        <a href="#">breadcrumbs</a>
				        <a href="#">on the header!</a>
				    </nav>
				</Portal>
			</div>
		);
	}
});
```
