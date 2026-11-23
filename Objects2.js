// objects using singleton and constructor function

// Singleton object


//Below is an example of a singleton object in JavaScript.
//  A singleton is an object that is instantiated only once and provides a single point of access to it.
//const tinderUser = new Object();


//Below is an example on non - singleton objects
/* const tinderUser = {};
console.log(tinderUser);
console.log(typeof tinderUser);

tinderUser.name = "Azaan";
tinderUser.age = 23;
tinderUser.id = "Azaan003";

console.log(tinderUser); */

// now we will see nested objects
const regularUser = {
    Username: {
        Firstname :"Azaan",
    lastName : "Khan"},
}

console.log(regularUser.Username.Firstname);
console.log(regularUser.Username.lastName);
console.log(regularUser);


// now we gonna learn merging objects
const obj1 = {1 : "Azaan", 2 : " Adan"}
const obj2 = {3 : "Ali", 4 : "Ahmed"}
const obj3 = {obj1, obj2}

console.log(obj3); // this is problematic because it will create nested objects instead of merging them
 // to solve this we use spread opeartor as we used to do in arrays
obj4 = {...obj1, ...obj2};
console.log(obj4); //{ '1': 'Azaan', '2': ' Adan', '3': 'Ali', '4': 'Ahmed' }
