//old way of string concatenation
//const name = "Azaan Khan";
//const greeting = "Hello, " + name + "!";

//new way of string concatenation , we use backticks and ${variable} to insert variables into strings
/* const name = "Azaan Khan";
const greeting = `Hello, ${name}!`;
console.log(greeting); */

//Trim function removes any starting or trailing whitespace from a string
/* const newStr = "   Javascript    ";
console.log(newStr);
console.log(newStr.trim());
 */

//replace ()
/* const url = "http://www.example.com";
console.log(url.replace("http", "https")); */ // repalce http with https


// splitting the string 
const sentence = "The quick brown fox jumps over the lazy dog";
const words = sentence.split(" "); // splitting based oon whitespace , it could be any character or string
console.log(words);
