var quickSort = function(){
    'use strict';


    // Function for swapping elements of the Array
    Array.prototype.swap=function(a, b)
    {
        var tmp=this[a];
        this[a]=this[b];
        this[b]=tmp;
    }

    //  Function moves all elements that are less than the pivot value to the beginnig of the array
    function partition(array, begin, end, pivot)
    {
        var piv=array[pivot];
        array.swap(pivot, end-1);
        var store=begin;
        var ix;
        for(ix=begin; ix<end-1; ++ix) {
            if(array[ix]<=piv) {
                array.swap(store, ix);
                ++store;
            }
        }
        array.swap(end-1, store);

        return store;
    }

    // Quick Sort - recursive method. This implementation uses a random pivot value.
    function quickSort(array, begin, end)
    {
        if(end-1>begin) {
            var pivot=begin+Math.floor(Math.random()*(end-begin));

            pivot=partition(array, begin, end, pivot);

            quickSort(array, begin, pivot);
            quickSort(array, pivot+1, end);
        }
    }

    return quickSort;
}();