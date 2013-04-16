// Common module
define([
  // Application.
  "app"
],

// Map dependencies from above array.
function(app) {

  // Create a new module.
  var Common = app.module();

  // Default View.
  Common.Views.Navigation = Backbone.Layout.extend({
      template: "common/navigation",
      events: {
          
      }
    });
  
  Common.Views.Header = Backbone.Layout.extend({
    template: "common/header",
    views: {
        "nav": new Common.Views.Navigation()
    }
  });
  
  Common.Views.Footer = Backbone.Layout.extend({
    template: "common/footer"
  });
  
  Common.Views.Tabs = Backbone.Layout.extend({
      template: "common/tabs"
  });
  // Return the module for AMD compliance.
  return Common;

});
