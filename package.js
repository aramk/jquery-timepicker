// Meteor package definition.
Package.describe({
  name: 'aramk:jquery-timepicker',
  version: '0.1.0',
  summary: 'Timepicker Plugin for jQuery'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.4.2.3');
  api.use([
    'jquery',
    'less'
  ], 'client');
  api.addFiles([
    'jquery.timepicker.min.js',
    'jquery.timepicker.css'
  ], 'client');
});
