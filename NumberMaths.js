const score = 100
console.log(score)

const score2 = new Number(200)
console.log(score2)

const otherNumber = 300.4532
console.log(otherNumber.toFixed(2));
console.log(otherNumber.toPrecision(3));

// There are many other methods available for numbers in JavaScript, such as:
console.log(Math.round(4.7));
console.log(Math.floor(4.7)); // gives lower value
console.log(Math.ceil(4.7)); // gives higher value
console.log(Math.random()); // gives random number between 0 and 1
console.log(Math.max(1, 2, 3, 4, 5)); // gives maximum value
console.log(Math.min(1, 2, 3, 4, 5)); // gives minimum value    
console.log(Math.pow(2, 3)); // gives power of a number
console.log(Math.sqrt(16)); // gives square root of a number