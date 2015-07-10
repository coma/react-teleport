var React = require('react');

var destinations = {};

module.exports = React.createClass({
    displayName         : 'Destination',
    propTypes           : {
        name: React.PropTypes.string
    },
    getDefaultProps     : function () {

        return {
            name: 'default'
        };
    },
    statics             : {
        destination: function (name) {

            name = name || 'default';

            if (!destinations.hasOwnProperty(name)) {

                throw new Error('There is no "' + name + '" teleport destination mounted.');
            }

            return destinations[name];
        }
    },
    getInitialState     : function () {

        return {
            child: null
        };
    },
    setChild: function (child) {

        if (!this.unmounted) {

            this.setState({
                child: child
            });
        }
    },
    add     : function (child) {

        this.setChild(child);
    },
    remove  : function () {

        this.setChild(null);
    },
    componentWillMount  : function () {

        this.unmounted = false;

        if (destinations.hasOwnProperty(this.props.name)) {

            throw new Error('Another "' + this.props.name + '" teleport destination is already mounted.');
        }

        destinations[this.props.name] = this;
    },
    componentWillUnmount: function () {

        this.unmounted = true;

        delete destinations[this.props.name];
    },
    render              : function () {

        return React.createElement('div', this.props, this.state.child);
    }
});
