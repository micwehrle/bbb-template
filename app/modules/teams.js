// Teams module
define([
  // Application.
  "app"
],

// Map dependencies from above array.
function(app) {

  // Create a new module.
  var Teams = app.module();

  // Default Model.
  Teams.Model = Backbone.Model.extend({
  
  });

  // Default Collection.
  Teams.Collection = Backbone.Collection.extend({
    model: Teams.Model
  });

  // Default View.
  Teams.Views.Layout = Backbone.Layout.extend({
    template: "teams"
  });

  // Return the module for AMD compliance.
  return Teams;

});
