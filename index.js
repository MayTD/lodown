'use strict';

/**
 * identity: returns value unchanged
 * 
 * @param {Value} value: any value
 * 
 * @return  {Value} value: value unchanged
 */
function identity(value) {
    return value;
}
module.exports.identity = identity;


/**
 * 
 * typeOf: Return the type of <value> as a string
 * 
 * @param {Value} value: any value
 * 
 * @return {String} value: type of value as a string
 */
function typeOf(value) {
    if (Array.isArray(value)) {
        return 'array';
    } else if (value === null) {
        return 'null';
    }
    
    return (typeof value);
}
module.exports.typeOf = typeOf;


/**
 * first: takes an array and a number and returns value based on condition
 * 
 * @param {Array} array: The collection over which to iterate
 * @param {Number} num: any numerical value
 * 
 * @return {Array} array: empty list or
 * whole array or
 * first element in array or
 * amount of elements equal to number
 */
function first(array, num) {
    if (!Array.isArray(array) || num < 0) {
        return [];
    } else if(num > array.length) {
        return array;
    } else if (!num || isNaN(num)) {
        return array[0];
    }

    return array.slice(0, num);
}
module.exports.first = first;


/**
 * last: If <array> is not an array, return [] or If <number> is not given or not a number, return just the last element in <array>, 
 * Otherwise, return the last <number> items of <array> 
 * 
 * @param {Array} array: The collection over which to iterate 
 * @param {Number} num: any value
 * 
 * @return {Array}: empty list or
 * whole array or
 * last element in array or
 * amount of elements equal to number
 */
function last(array, num) {
    if (!Array.isArray(array) || num < 0) {
        return [];
    } else if(num > array.length) {
        return array;
    } else if (!num || isNaN(num)) {
        return array[array.length - 1];
    }
    
    return array.slice(num - 1);
}
module.exports.last = last;


/**
 * indexOf: Return the index of <array> that is the first occurrance of <value> or -1 if <value> is not in <array>
 * 
 * @param {Array} array: The collection over which to iterate 
 * @param {Value} value: any value
 * 
 * @return {Value} i or -1: index of array or -1
 */
function indexOf(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
    }
    
    return -1;
}
module.exports.indexOf = indexOf;


/**
 * contains: Return true if <array> contains <value> or Return false otherwise
 * 
 * @param {Array} array: The collection over which to iterate 
 * @param {Value} value: any value
 * 
 * @return {Boolean} true or false: returns true or false
 */
function contains(array, value) {
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
 * @return {Undefined} undefined: no return statement specified
 */
function each(collection, func) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            func(collection[i], i, collection);
        }
    } else {
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
    let arr = [];
    
    each(array, function(element, index, array) {
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
    return filter(array, function(element, index, array) {
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
    let array2 = [[], []];
    
    each(array, function(element, index, array) {
        if (func(element, index, array)) {
            array2[0].push(element);
        } else {
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
    
    each(collection, function(element, index, collection) {
        return arr.push(func(element, index, collection));
    })
    
    return arr;
}
module.exports.map = map;


/**
 * pluck: Return an array containing the value of <prop> for every element in <array>
 * 
 * @param {Array} array: array of object
 * @param {Value} prop: property of an object key
 * 
 * @return {Array} arr: array of values that equal prop from every element
 */
function pluck(array, prop) {
    return map(array, function(element, index, array) {
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

    each(collection, function(element, index, collection) {
        if (typeof func === 'function' && !func(element, index, collection)) {
          bool = false;
        } else if (typeof func !== 'function' && !element) {
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
    
    each(collection, function(element, index, collection) {
        if (typeof func === 'function' && func(element, index, collection)) {
          bool = true;
        } else if (typeof func !== 'function' && element) {
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
 * @return {Value} seed: value of the final <function> call
 */
function reduce(array, func, seed) {
    if (seed !== undefined) {
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
 * extend: copies properties from all other objects into object1
 * 
 * @param {Object} object#: objects to copy into object1
 * 
 * @return {Object} object1: object1 merged with properties from all other objects
 */
function extend(object1, object2) {
    return Object.assign(object1, ...arguments);
    
}
module.exports.extend = extend;