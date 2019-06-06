'use strict';

// YOU KNOW WHAT TO DO //

// /**
//  * each: Designed to loop over a collection, Array or Object, and applies the 
//  * action Function to each value in the collection.
//  * 
//  * @param {Array or Object} collection: The collection over which to iterate.
//  * @param {Function} action: The Function to be applied to each value in the 
//  * collection
//  */
// function each(collection, action) {
//     if(Array.isArray(collection)) {
//         for(var i = 0; i < collection.length; i++) {
//             action(collection[i], i, collection);
//         }
//     } else {
//         for (var key in collection) {
//             action(collection[key], key, collection);
//         }
//     }
// }
// module.exports.each = each;

/**
 * identity: returns value unchanged
 * 
 * @param {value} value: any value
 * 
 * @return  {value} value: value unchanged
 */

function identity(value) {
    // return value unchanged
    return value;
}
module.exports.identity = identity;

/**
 * 
 * typeOf: Return the type of <value> as a string
 * 
 * @param {value} value: any value
 * 
 * @return {string} string: type of value as a string
 */
function typeOf(value) {
    // check if array
    if (Array.isArray(value)) {
        return 'array';
    }
    // check if null
    else if (value === null) {
        return 'null';
    }
    
    // use typeOf method unary operator
    return (typeof value);
}
module.exports.typeOf = typeOf;

/**
 * first: takes an array and a number and returns value based on condition
 * 
 * @param {array} array: The collection over which to iterate
 * @param {number} number: any numerical value
 * 
 * @return {array} array: empty list or
 * whole array or
 * first element in array or
 * amount of elements equal to number
 */
function first(array, num) {
    // check if array is not array or if num is neg
    if (!Array.isArray(array) || num < 0) {
        // return an empty list
        return [];
    }
    // check if num is greater than array length
    else if(num > array.length) {
        // return whole array
        return array;
    }
    // check if num is not given or is not a number
    else if (!num || isNaN(num)) {
        // return first element of array
        return array[0];
    }
    
    // return number of elements equal to num
    return array.slice(0, num);
}
module.exports.first = first;

/**
 * last: If <array> is not an array, return [] or If <number> is not given or not a number, return just the last element in <array>, 
 * Otherwise, return the last <number> items of <array> 
 * 
 * @param {array} collection: The collection over which to iterate 
 * @param {value} value: any value
 * 
 * @return {array}: empty list or
 * whole array or
 * last element in array or
 * amount of elements equal to number
 */
function last(array, num) {
    // check if array is not array or if num is neg
    if (!Array.isArray(array) || num < 0) {
        // return an empty list
        return [];
    }
    // check if num is greater than array length
    else if(num > array.length) {
        // return whole array
        return array;
    }
    // check if num is not given or is not a number
    else if (!num || isNaN(num)) {
        // return last element of array
        return array[array.length - 1];
    }
    
    // return number of elements equal to num
    return array.slice(num - 1);
}
module.exports.last = last;


/**
 * indexOf: Return the index of <array> that is the first occurrance of <value> or -1 if <value> is not in <array>
 * 
 * @param {array} array: The collection over which to iterate 
 * @param {value} value: any value
 * 
 * @return {value} i or -1: index of array or -1
 */
function indexOf(array, value) {
    // loop through array and returns index at which value is first found
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            // return the index
            return i;
        }
    }
    
    // value is not found, return -1
    return -1;
}
module.exports.indexOf = indexOf;


/**
 * contains: Return true if <array> contains <value> or Return false otherwise
 * 
 * @param {array} collection: The collection over which to iterate 
 * @param {value} value: any value
 * 
 * @return {boolean} true or false: returns true or false
 */
function contains(array, value) {
    // includes will loop over the array and return true if it's found, and false it not found
    return array.includes(value) ? true : false;
}
module.exports.contains = contains;


/**
 * each: call <function> once for each element or property with the arguments: 
 * the element/property, it's index, <collection>
 * 
 * @param {Array or Object} collection: The collection over which to iterate
 * @param {Function} func: The Function to be applied to each value in the collection
 * 
 * @return {undefined} undefined: no return statement specified
 */
function each(collection, func) {
    // check if collection is an array
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            func(collection[i], i, collection);
        }
    }
    // collection is an object
    else {
        for (let key in collection) {
            func(collection[key], key, collection);
        }
    }
}
module.exports.each = each;


/**
 * unique: Return a new array of all elements from <array> with duplicates removed
 * 
 * @param {Array} array: The collection over which to iterate
 * 
 * @return {Array} uniq: values of array without duplicates
 */
function unique(array) {
    let uniq = [];
    
    for (let i = 0; i < array.length; i++) {
        // if the index of first-occurring value is greater than i
        if (indexOf(array, array[i]) >= i) {
            uniq.push(array[i]);
        }
    }
    
    return uniq;
}
module.exports.unique = unique;


/**
 * filter: return a new array of elements for which calling <function> returned true
 * 
 * @param {Array} array: The collection over which to iterate
 * @param {Function} func: The Function to be applied to each value in the array 
 * 
 * @return {Array} arr: array with elements that passed through func
 */
function filter(array, func) {
    // holds values that will pass through func
    let arr = [];
    
    // each element will call func
    each(array, function(element, index, array) {
        // if func returns true, push the element into arr
        if (func(element, index, array)) {
            arr.push(element);
        }
    });
    
    return arr;
}
module.exports.filter = filter;


/**
 * reject: return a new array of elements for which calling <function> returned false
 * 
 * @param {Array} array: The collection over which to iterate
 * @param {Function} func: The Function to be applied to each value in the array 
 * 
 * @return {Array} arr: array with elements that fail through func
 */
function reject(array, func) {
    // filter returns an array that passes through func
    return filter(array, function(element, index, array) {
        // return the opposite of func, true to false
        // this makes filter to return the opposite
        return !func(element, index, array);
    });
}
module.exports.reject = reject;


/**
 * partition:Return an array that is made up of 2 sub arrays: one with all true values and another with all false values of func
 * 
 * @param {Array} array: The collection over which to iterate
 * @param {Function} func: The Function to be applied to each value in the array 
 * 
 * @return {Array} arr: 2 subarrays of true values and false values
 */
function partition(array, func) {
    // array with two empty arrays
    let array2 = [[], []];
    
    each(array, function(element, index, array) {
        // if func returns true, push true element into the first element's array
        if (func(element, index, array)) {
            array2[0].push(element);
        } 
        // func returns false, push false element into sec element's array
        else {
            array2[1].push(element);
        }
    });
    
    return array2;
}
module.exports.partition = partition;


/**
 * map: return array of the values of each <function> call
 * 
 * @param {Array or Object} collection: The collection over which to iterate
 * @param {Function} func: The Function to be applied to each value in the array 
 * 
 * @return {Array} arr: return array of values of each function call
 */
function map(collection, func) {
    let arr = [];
    
    // for each element, call func and push its result into arr
    each(collection, function(element, index, collection) {
        return arr.push(func(element, index, collection));
    })
    
    return arr;
}
module.exports.map = map;


/**
 * pluck: Return an array containing the value of <property> for every element in <array>
 * 
 * @param {Array} array: array of object
 * @param {Value} property: property of an object key
 * 
 * @return {Array} arr: array of values that equal prop from every element
 */
function pluck(array, prop) {
    // map will return an array with values of prop in each element's objects 
    return map(array, function(element, index, array) {
        // return element's object's key's value
        return element[prop];
    });
}
module.exports.pluck = pluck;


/**
 * every: returns true if all function calls returns true and false if it finds one false
 * 
 * @param {Array or Object} collection: The collection over which to iterate
 * @param {Function} func: The Function to be applied to each value in the array 
 * 
 * @return {Boolean} bool: returns true if all func call returns true
 * returns false if any func call returns false
 */
function every(collection, func) {
    let bool = true;
    
    // call func for every element
    // return false if it finds any false values
    each(collection, function(element, index, collection) {
        // func is actually a function and func is false
        if (typeof func === 'function' && !func(element, index, collection)) {
          bool = false;
        }
        // function is not provided and element is false
        else if (typeof func !== 'function' && !element) {
            bool = false;
        }
    });
    
    return bool;
}
module.exports.every = every;


/**
 * some: returns false if all function calls returns false and true if it finds one true
 * 
 * @param {Array or Object} collection: The collection over which to iterate
 * @param {Function} func: The Function to be applied to each value in the array 
 * 
 * @return {Boolean} bool: returns false if all func call returns false
 * returns true if any func call returns true
 */
function some(collection, func) {
   let bool = false;
    
    // call func for every element
    // return true if it finds any true values
    each(collection, function(element, index, collection) {
        // func is actually a function and func is true
        if (typeof func === 'function' && func(element, index, collection)) {
          bool = true;
        }
        // function is not provided and element is true
        else if (typeof func !== 'function' && element) {
            bool = true;
        }
    });
    
    return bool;
}
module.exports.some = some;


/**
 * reduce: return value of last iteration of <function> call
 * 
 * @param {Array or Object} collection: The collection over which to iterate
 * @param {Function} func: The Function to be applied to each value in the array 
 * @param {Value} seed: the return value of <function> as the previous result
 * 
 * @return {value} seed: value of the final <function> call
 */
function reduce(array, func, seed) {
    if (seed) {
        for (let i = 0; i < array.length; i++) {
            seed = func(seed, array[i], i);
        }
    }
    else if (seed === undefined){
        seed = array[0];
        for (let i = 1; i < array.length; i++) {
            seed = func(seed, array[i], i);
        }
    }
    
    return seed;
}
module.exports.reduce = reduce;


/**
 * extend: copyies properties from all other objects into object1
 * 
 * @param {Object} object#: objects to copy into object1
 * 
 * @return {Object} object1: object1 merged with properties from all other objects
 */
function extend(object1, object2) {
    // Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object
    // spread syntax (...) allows an iterable to expand in places where 0+ arguments are expected
    return Object.assign(object1, ...arguments);
    
}
module.exports.extend = extend;