//Understanding how memory works in javascript is crucial for writing efficient code.
//  JavaScript uses two types of memory: stack and heap.
// All primitive types use stack memory
    // we get a copy of the value when we try to access it 
// All non-primitive types use heap memory 
    // we get a reference to the value when we try to access it


// Example of stack memory
/* let myName = "azaan";
let myAnotherName = myName; // we get a copy of the value   
console.log(myName); // "azaan"
myAnotherName = "azaanKhan"; // changing the value of myAnotherName does not affect myName
console.log(myAnotherName); // "azaanKhan" */

// Example of heap memory
/* let myName = { name: "azaan" };
let myAnotherName = myName; // we get a reference to the value
console.log(myName); // { name: "azaan" }
//console.log(typeof myName); // object
//console.log(typeof myAnotherName); // object
myAnotherName.name = "azaanKhan"; // changing the value of myAnotherName affects myName
console.log(myName); // { name: "azaanKhan" } */



let user1 = {name : "azaan",
    email : "azaan.ak001@gmail.com",
    age : 24};

let user2 = {name : "adan",
    email : "adan.ak001@gmail.com", 
    age : 21};

    console.log(user1);
    console.log(user2);
user2.name = "azam";
    console.log(user2);