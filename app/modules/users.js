// Users module
define([
  // Application.
  "app"
],

// Map dependencies from above array.
function(app) {

  // Create a new module.
  var Users = app.module();

  // Default Model.
  Users.Model = Backbone.Model.extend({
  
  });

  // Default Collection.
  Users.Collection = Backbone.Collection.extend({
    model: Users.Model
  });

  // Default View.
  Users.Views.Layout = Backbone.Layout.extend({
    template: "users"
  });

  // Return the module for AMD compliance.
  return Users;

});
