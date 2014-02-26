
/*


    Per ottimizzaizoni di performance, invece di utilizzare un setInterval / clearInterval / setTimeout / clearTimeout
    Utilizziamo un metodo basato sui frame / cicli di renderizzazione disponibili del browser. 
    In questo modo si evitano colli di bottiglia durante il renderind di animazioni / effetti / scroll / etc...
    fonte: http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/


*/

define([
    "jquery"
],
function($) {

    var lastTime = 0;
    var vendors = ['webkit', 'moz'];
    
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame =
          window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    }

    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
    }
});