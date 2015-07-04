var React       = require('react'),
    Destination = require('./destination').destination;

module.exports = React.createClass({
    displayName         : 'Portal',
    propTypes           : {
        destination: React.PropTypes.string
    },
    getDefaultProps     : function () {

        return {
            destination: 'default'
        };
    },
    componentWillMount  : function () {

        this.destination = Destination(this.props.destination);
    },
    componentDidMount  : function () {

        this
            .destination
            .add(this.props.children);
    },
    componentWillUnmount: function () {

        this
            .destination
            .remove(this.props.children);
    },
    render              : function () {

        return false;
    }
});
