define([
    'underscore',
    'backbone',
    'jquery',
    'models/CategoryModel'
], function(_, Backbone, $, CategoryModel) {

    var CategoriesCollection = (Backbone.Collection.extend({
        url: '/categories',
        model: CategoryModel,
        parse: function(response) {
            return response.categories;
        }
    }));

    return CategoriesCollection;

});