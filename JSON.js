//Objects destructuring 
const courses = {
    courseName : "Javascript",
    Instructor : "Hitesh",
    price : "999"
}

//usually when we want to access any data from the object we use :
// const courseInstructor = course.Instructor
//but to maaintain a clean code, we do the same thing in a slightly differernt way
//syntax : cosnt {value} = Object name

const {price} = courses;
console.log(price);

//this is how we accessed the values, now let's  desctructure it 
//Syntax const {value : newVariable} = ObjectName

const {courseName : course} = courses;
console.log(course);





