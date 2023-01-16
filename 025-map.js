// A Map in JavaScript is a collection of key-value pairs, where each key is unique. It's similar to an object, but keys can be any value, including objects and functions, whereas in JavaScript objects, keys are limited to strings and symbols.

// You can create a Map using the Map constructor, like this:

let myMap2 = new Map([
  ["name", "John"],
  ["age", 30],
  [true, "yes"],
]);

// You can also create an empty map and add key-value pairs to it later using the set() method:

let myMap = new Map();
myMap.set("name", "John");
myMap.set("age", 30);
myMap.set(true, "yes");
