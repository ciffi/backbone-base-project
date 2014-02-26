// global namespace only for dev environment
var DEV_PROJECT = {};
// Load the main app module to start the app
require(['appRouter', 'jquery', 'underscore', 'backbone', 'namespace', 'text!data/config.json'], function(AppRouter, $, _, Backbone, PN_PROJECT, config) {
    $(document).ready(function() {
        // DEV ENV
        if ((typeof(_ENV) !== 'undefined' && _ENV === 'dev')) {
            PN_PROJECT.api_host = JSON.parse(config).dev.api_host;
            PN_PROJECT.base_url = JSON.parse(config).dev._BASE_URL;
            DEV_PROJECT = PN_PROJECT;
        } else if ((typeof(_ENV) !== 'undefined' && _ENV === 'stage')) {
            // TEST ENV
            PN_PROJECT.api_host = JSON.parse(config).stage.api_host;
            PN_PROJECT.base_url = JSON.parse(config).stage._BASE_URL;
        } else {
            // PROD ENV
            PN_PROJECT.api_host = JSON.parse(config).prod.api_host;
            PN_PROJECT.base_url = JSON.parse(config).prod._BASE_URL;
        }
        
        var _sync = Backbone.sync;
        Backbone.sync = function(method, model, options) {
            var _url = _.result(model, 'url');
            _url = PN_PROJECT.api_host + _url;
            if (typeof(_DEBUG) != 'undefined' && _DEBUG === true) {
                if (_url.indexOf("?") === -1) {
                    _url += '?XDEBUG_SESSION_START=netbeans-xdebug';
                } else {
                    _url += '&XDEBUG_SESSION_START=netbeans-xdebug';
                }
            }
            options.url = _url;
//            options.beforeSend = function(xhr) {
//                var lang = window.navigator.userLanguage || window.navigator.language;
//                xhr.setRequestHeader('Accept-Language', lang);
//            };

            return _sync(method, model, options);
        };

        // enable logger in debug mode
        if ((typeof(_ENV) != 'undefined' && _ENV == 'dev')) {
            PN_PROJECT.Logger.enabled = true;
            PN_PROJECT.Logger.console = true; // log to default console too
        }
        PN_PROJECT.Logger.log('document ready');

        new AppRouter();
    });
});
