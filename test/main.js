var jsdom = require('jsdom');

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = window.navigator;

var React    = require('react/addons'),
    Teleport = require('../src');

describe('Teleport', function () {

    it('sends an element from one portal to its destination', function () {

        var spock = React.createElement('p', null, 'spock');

        var destination = React.createElement(Teleport.Destination, {
            name: 'header'
        });

        var portal = React.createElement(Teleport.Portal, {
            destination: 'header'
        }, spock);

        var wrap = React.createElement('div', null, destination, portal);

        React.render(wrap, document.body);

        (document.querySelector('[name="header"] p').innerHTML)
            .should.equal('spock');
    });
});