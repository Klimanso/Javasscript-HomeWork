var Fibonacci = (function(){
    'use strict';

    // Function for finding N number of Fibonacci Numbers
    var getNumber = function(n){
        if(n <= 2)
            return n;

        var previous = 1,
            prePrevious = 0,
            current;

        for(var i=3;i<=n;i++){
            current = previous + prePrevious;
            prePrevious = previous;
            previous = current;
        }
        return current;
    };

    return {
        getNumber: getNumber
    }
})();