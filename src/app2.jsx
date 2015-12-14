var React = require('react');
var ReactDOM = require('react-dom');
var App2 = React.createClass({
  render: function(){
    return(
    <div>
      <h2>test test</h2>
    </div>
    );
  }
});

ReactDOM.render(
  <App2 />,
  document.getElementById('app2')
);