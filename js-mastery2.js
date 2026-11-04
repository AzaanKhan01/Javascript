console.log(null > 0);
console.log(null >= 0);
console.log(null == 0); 
// false
//true
//false
//this happens as reason of type coercion in js. null is converted to number 0 for comparison with number 0. but null is not equal to 0 as it is not a number.