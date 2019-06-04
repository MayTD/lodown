'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

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
 * @param {array} collection: The collection over which to iterate
 * @param {number} number: any numerical value
 * 
 * @return {array}: empty list or
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
 * @param {array} collection: The collection over which to iterate 
 * @param {value} value: any value
 * 
 * @return {array}: empty list or
 * whole array or
 * first element in array or
 * amount of elements equal to number
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
module.export.indexOf = indexOf;


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
 * @param {Function} action: The Function to be applied to each value in the collection
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
module.export.each = each;

/**
 * unique: returns a new array with no duplicates
 * 
 * @param {Array} collection: The collection over which to iterate
 * 
 * @return {Array} collection: array with no duplicates
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