Meteor.startup(function() {
  console.log('Application startup');
  document.addEventListener('WebComponentsReady', function() {
    console.log('WebComponentsReady');
  });
});
