define([
    'modernizr',
    'underscore',
    'backbone',
    'jquery',
    'handlebars',
    'namespace',
    'browserselector',
    'collections/CategoriesCollection',
    'views/HomeView',
    'moduleTemplate'
], function(modernizr, _, Backbone, $, Handlebars, PN_PROJECT, browserselector, CategoriesCollection, HomeView, template) {
    var AppRouter = Backbone.Router.extend({
        routes: {
            "": "home",
            "home": "home"
        },
        initialize: function() {

            // i partials devono essere definiti prima di tutto
            Handlebars.registerPartial("header", template["js/templates/partial/header.hbs"]);
            Handlebars.registerPartial("footer", template["js/templates/partial/footer.hbs"]);

            //avvio applicazione
            Backbone.history.start({pushState: false});

            // All navigation that is relative should be passed through the navigate
            // method, to be processed by the router. If the link has a `data-bypass`
            // attribute, bypass the delegation completely.
            $(document).on("click", "a:not([data-bypass])", function(evt) {
                // Get the anchor href and protcol
                var $this = $(this);
                var href = $this.attr("href");
                var protocol = this.protocol + "//";
                // Ensure the protocol is not part of URL, meaning it's relative.
                if (href && href.slice(0, protocol.length) !== protocol && href.indexOf("javascript:") !== 0) {
                    // Stop the default event to ensure the link will not cause a page
                    // refresh.
                    evt.preventDefault();
                    // `Backbone.history.navigate` is sufficient for all Routers and will
                    // trigger the correct events. The Router's internal `navigate` method
                    // calls this anyways.
                    Backbone.history.navigate(href, true);
                }
            });
        },
        home: function(e) {
            PN_PROJECT.Logger.log('home page');
            
            if (!PN_PROJECT.hasOwnProperty('homeView')) {
                PN_PROJECT.homeView = new HomeView();
            }            
        }
    });
    return AppRouter;
});