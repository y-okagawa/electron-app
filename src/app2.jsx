var ReactDOM = require('react-dom');
const React = require('react');
const RaisedButton = require('material-ui/lib/raised-button');

const MyAwesomeReactComponent = React.createClass({
  render() {
    return (
        <RaisedButton label="Default" />
    );
  },
});

module.exports = MyAwesomeReactComponent;

ReactDOM.render(
  <MyAwesomeReactComponent />,
  document.getElementById('app2')
);