var GeometricProgression = (function(){
    'use strict';

    // Function for finding N element of Progression
    var findElement = function(firstElement, q, n){
        return firstElement*Math.pow(q,n-1);
    };

    // Function for finding composition of the first N elements of Progression
    var compositionOfFirstElements = function(firstElement, q, n){
        return Math.pow(firstElement * findElement(firstElement,q,n),n/2);
    };

    return {
        findElement: findElement,
        compositionOfFirstElements: compositionOfFirstElements
    }
})();