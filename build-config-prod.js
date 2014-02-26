require.config({
    baseUrl: 'js',
    keepBuildDir: true,
    optimize: 'uglify2',
    useStrict: true,
    name: 'emir',
    enforceDefine: false,
    waitSeconds : 15, //make sure it is enough to load all scripts
    paths: {
        requireLib: '../libs/requirejs/require',
        moduleTemplate: '../target/module-templates',
        modernizr: '../libs/modernizr/modernizr',
        jquery: '../libs/jquery/jquery.min',
        jqueryui: '../libs/jqueryui/ui/minified/jquery-ui.min',
        jqueryuiDP_IT: '../libs/jqueryui/ui/i18n/jquery.ui.datepicker-it',
        underscore: '../libs/underscore/underscore-min',
        backbone: '../libs/backbone/backbone-min',
        modelBinder: '../libs/Backbone.ModelBinder/Backbone.ModelBinder.min',
        handlebars: '../libs/handlebars/handlebars.min',
        text: '../libs/requirejs-plugins/lib/text',
        placeholder: '../libs/jquery-placeholder/jquery.placeholder.min',
        browserselector: 'util/css_browser_selector'
    },
    include: "requireLib",
    //dependencies
    shim: {
        'modernizr': {
            exports: 'Modernizr'
        },
        'jquery': {
            deps: [],
            exports: '$'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'modelBinder': {
            deps: ['backbone'],
            exports: 'ModelBinder'
        },
        'underscore': {
            exports: '_'
        },
        'handlebars': {
            exports: 'Handlebars'
        },
        'jqueryui': {
            deps: ['jquery'],
            exports: '$'
        },
        'jqueryuiDP_IT': {
            deps: ['jqueryui'],
            exports: '$.datepicker.regional'
        },
        'placeholder': {
            deps: ['jquery'],
            exports: '$.fn.placeholder'
        }
    }

});