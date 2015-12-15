const React = require('react');
const ReactDOM = require('react-dom');
const injectTapEventPlugin = require("react-tap-event-plugin");
const DatePicker = require('material-ui/lib/date-picker/date-picker');
const DatePickerDialog = require('material-ui/lib/date-picker/date-picker-dialog');

injectTapEventPlugin();

ReactDOM.render(
 <DatePicker hintText="DatePicker" />,
  document.getElementById('app2')
);