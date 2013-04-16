define([
  // Application.
  "app",
  "modules/common",
  "modules/account",
  "modules/map",
  
  "bootstrap-core"
],

function(app, Common, Account, Map) {

    // Defining the application router, you can attach sub routers here.
    var Router = Backbone.Router.extend({
        routes: {
            "": "index",
            "map": "onMap",
            "teams": "onTeams",
            "manage": "onUsers",
            "users": "onUsers",
            
            "support": "onSupport",
            
            "settings": "onSettings",
            "settings/billing": "onBilling",
            "settings/password": "onPassword",
            
            "login": "onLogin",
            "logout": "onLogout"
        },
        
        initialize: function () {
            console.log('wuddup? check session status');
            app.useLayout().setViews({
                "header": new Common.Views.Header(),
                "aside": new Common.Views.Tabs(),
                "section": new Backbone.View({
                    // Add some content to the header
                    beforeRender: function() {
                      this.$el.html("Section!");
                    }
                }),
                "footer": new Common.Views.Footer(),
            }).render();
        },
        onMap: function () {
            console.log('onMap');
            app.layout.setView('section', new Map.Views.Layout()).render();
        },
        onTeams: function () {
            console.log('onTeams');
        },
        onUsers: function () {
            console.log('onUsers');
        },
        onSupport: function () {
            console.log('onSupport');
            app.layout.setView('section', new Account.Views.Support()).render();
        },
        onSettings: function () {
            console.log('onSettings');
            app.layout.setView('section', new Account.Views.Layout({model: app.account})).render();
        },
        onSubscription: function () {
            console.log('onSubscription');
        },
        onBilling: function () {
            console.log('onBilling');
        },
        onPassword: function () {
            console.log('onPassword');
            app.layout.setView('section', new Account.Views.Password()).render();
        },
        onLogin : function () {
            // if logged in, reroute to default
        },
        onLogout : function () {
            // if logged in, reroute to default
            console.log('onLogout');
            app.layout.setView('section', new Account.Views.Logout()).render();
        }
    
  });

  return Router;

});
