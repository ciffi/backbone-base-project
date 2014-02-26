define([
    'underscore',
    'backbone',
    'jquery',
    'moduleTemplate',
], function(_, Backbone, $, template) {

    var HomeView = Backbone.View.extend({
        template: template["js/templates/home.hbs"],
        el: 'body',
        events: 'ontouchstart' in document.documentElement ? {
           //'touchend .className': 'action'
        } : {
            //'click .className': 'action'
        },
        initialize: function() {
            this.$el.html(this.template());
        }
    });

    return HomeView;

});