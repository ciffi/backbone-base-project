define([
    'util/Logger'
], function(Logger) {
    return {
        Logger: Logger,
        api_host: null,
        views: {},
        models: {},
        collections: {}
    }
});