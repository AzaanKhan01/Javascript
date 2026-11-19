//Lets study about arrays in javascript
//Declaration of an array
/* const myArray = [1,2,3,4,5,6] // elements can be of diffrent types aswell
console.log(myArray)
myArray[4] = 11;
console.log(myArray)
console.log(myArray[4]) //accessing the element of an array
 */
const myHobbies = ['Reading', 'Coding', 'Travelling', 'Gaming']
//console.log(myHobbies)
//console.log(myHobbies[2]) //accessing the element of an array
myHobbies[1] = 'Writing' //changing the element of an array
myHobbies.push("Cooking")
//console.log(myHobbies)
//console.log(myHobbies.includes('Travelling')) //checking if an element is present in the array or not

//Undertanding the diffrence between slice and splice
const a1 = [1,2,3,4,5,6,7]
console.log("A", a1)
const a2 = a1.slice(1,3)
console.log("B", a2)
const a3 = a1.splice(1,3)
console.log("C", a3)
console.log("D", a1) //splice modifies the original array while slice does not