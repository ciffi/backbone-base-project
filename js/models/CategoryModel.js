define([
    'underscore',
    'backbone',
    'jquery'
], function(_, Backbone, $) {

    var CategoryModel = (Backbone.Model.extend({
        urlRoot: '/category',
        defaults: {
            id: null,
            name: null,
            category: null,
            image: null,
            category_slug: null
        }
    }));

    return CategoryModel;

});