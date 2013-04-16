// Account module
define([
  // Application.
  "app"
],

// Map dependencies from above array.
function(app) {

  // Create a new module.
  var Account = app.module();

  // Default Model.
  Account.Model = Backbone.Model.extend({
    'url': '/api/accounts'
  });

  // Default Collection.
  Account.Collection = Backbone.Collection.extend({
    model: Account.Model
  });

  // Default View.
  Account.Views.Layout = Backbone.Layout.extend({
    template: "account",
    serialize: function () {
        var self = this;
        return {
            data: {
                model: self.options.model
            }
        }
    }
  });
  
  Account.Views.Support = Backbone.Layout.extend({
      template: "support"
  });

  Account.Views.Password = Backbone.Layout.extend({
      template: "password"
  });
  
  Account.Views.Logout = Backbone.Layout.extend({
      template: "logout"
  });
  // Return the module for AMD compliance.
  return Account;

});
