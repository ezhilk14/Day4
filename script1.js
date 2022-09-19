// stringify

var obj1 = {"name": "person 1", "age": 5};
var obj2 = {"age": 5, "name": "person 1"};

console.log(JSON.stringify(obj1) === JSON.stringify(obj2)); 
// false



// Lodash 

// import _ from "lodash";

// var obj1 = {"name": "person 1", "age": 5};
// var obj2 = {"age": 5, "name": "person 1"};

// console.log(_.isEqual(obj1, obj2)); 

// // true