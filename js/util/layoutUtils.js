define([
    "jquery"
],
function($) {

    var LayoutUtils = {
        loadingInterval: null, //intervallo per loading
        //altezza elemento $el come viewport
        setFullHeight: function($el) {
            $el.height($(window).height());
        },
        loading: function($container,action) {
            if (action == "show") {
                $container.show();
                _start();
            }else if(action == "hide") {
                $container.hide();
                _stop();
            }else {
                console.log('errore sintassi');
            }

            $container.children().css('display','none').first().css('display','block');

            function _start() {
                var _delay = 400;
                this.loadingInterval = setInterval(function() {
                    $('#loader-img').children().first().appendTo($('#loader-img')).css('display','none');
                    $container.children().first().css('display','block');
                },_delay);
            };

            function _stop() {
                clearInterval(this.loadingInterval);
            };
        }

    }

    return LayoutUtils;
});