'use strict'

// your solution
class Finder{
  // write the code to initialize your class here
  // the input is and array of string ex. ["asd", "wer"]
  // Save the array in a variable.
  constructor(arr) {
    this.arrayPassed = arr;
  }

  // write you code to get subset of initial array with given key
  // key is always string ex. "asd"
  find(key) {
    // Avoid unnecessary checks on empty strings, hence trim at beginning.
    // Return empty array in case of encountering an empty string value.
    if (!key.trim()) {
      return [];
    }
    // Order the string in beginning to avoid iterations.
    let orderedKey = key.split("").sort().join("");
    return this.arrayPassed.filter(arrItem => {
      // Assuming each item contained in an array is a string.
      // Avoid unnecessary checks on empty strings, hence trim at beginning.
      arrItem = arrItem.trim();

      // Note: Using conditional ifs as they are marginally faster than other options.
      // When any of arrItem is an empty string we treat it as a false check.
      if (!arrItem) return false;

      // Discard the strings of unequal length.
      if (key.length != arrItem.length) return false;

      // If the strings are equal and ordered we filter it out as positive value.
      if (key === arrItem) return true;

      // At this stage we need to order the items we are checking.
      let orderArrItem = arrItem.trim().split("").sort().join("");
      if (orderedKey === orderArrItem) return true;

      // By default filter everything out.
      return false;
    });
  }
}


module.exports = Finder
