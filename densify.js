/*!
GitHub:    https://github.com/vitto/densifyjs
License:   MIT Licence
Version:   1.0.0
Date:      2014-05-12
Author:    Vittorio Vittori
Website:   http://vittoriovittori.com
*/

var DensifyJS = (function() {

    var isRetina, retinaElements, retinaAttribute;

    retinaAttribute = "data-retina";
    isRetina = window.devicePixelRatio > 1 || false;

    camelCase = function(attributeName) { 
        attributeName = attributeName.replace('data-','');
        return attributeName.toLowerCase().replace(/-(.)/g, function(match, group) {
            return group.toUpperCase();
        });
    };

    return {
        init : function() {
            if (!isRetina) {
                return;
            }
            retinaElements = document.querySelectorAll("[" + retinaAttribute + "]");
            this.updateElements();
        },
        setAttribute : function(attributeName) {
            retinaAttribute = attributeName;
        },
        updateElements : function () {
            var propertyName = camelCase(retinaAttribute);
            for (var i = retinaElements.length - 1; i >= 0; i--) {
                if (retinaElements[i].nodeName === 'IMG') {
                    retinaElements[i].src = retinaElements[i].dataset[propertyName];
                } else {
                    retinaElements[i].style.backgroundImage = 'url(' + retinaElements[i].dataset[propertyName] + ')';
                }
            }
        }
    };
})();

document.addEventListener('DOMContentLoaded', function(){
    DensifyJS.init();
});
