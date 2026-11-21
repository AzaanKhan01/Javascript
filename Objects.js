//This file is all about JavaScript objects. It contains various examples and explanations of how to create, manipulate, and use objects in JavaScript. The file covers topics such as object literals, constructors, prototypes, and methods. It also includes examples of how to access and modify object properties, as well as how to iterate over objects using loops. Overall, this file serves as a comprehensive guide for understanding and working with objects in JavaScript.
//objects are  declared using object literals or constructors
//singleton - it is created using object literals and it is a single instance of an object
//singleton's are not created using constructors and they are not reusable
//creating object using literals
const jsUser = {
    name:"Azaan",
    age : 23,
    relationship : "SingleAf",

}
//A way of accessing objects
//console.log(jsUser.name);
//Better way of accessing objects
//console.log(jsUser["name"]);
//Adding new properties to an object
/* console.log(jsUser["name"]) // we have to write name in quotes as it is supposedly a string and not a variable


// we can also over write the existing properties of an object
jsUser.age = 24
console.log(jsUser.age)

// but if we want we canalso restrict the overwritng of properties of an object by using Object.freeze() method
Object.freeze(jsUser)
 */

jsUser.greeting = function(){
    console.log("Welcome to my Struggle Phase")
}
console.log(jsUser.greeting())

// unsing backticks `` is called string interpolation
//  and it is used to insert variables into a string,
// $ is also used to insert variables into a string, and the variables are enclosed in curly braces {}. This allows for dynamic string creation and makes it easier to read and write strings that contain variables.
jsUser.greeting2 = function(){
    console.log(`Hello ${this.name}, you are ${this.age} years old and your relationship status is ${this.relationship}`)
}
console.log(jsUser.greeting2())

