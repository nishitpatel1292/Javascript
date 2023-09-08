function person(fname,lname){ //constructor function
    this.firstname = fname
    this.lastname = lname
}
const person1 = new person('Nishit','Patel')
const person2 = new person('Krishnan','Patel')

person.prototype.getFullName = function(){
    return this.firstname + ' '+ this.lastname
}

console.log(person1.getFullName())
console.log(person2.getFullName())

// ******************prototype inheritance******************
var student = { //constructor function
    name : "Nishit",
    canFLy : false,
    canTalk : true,
}
var gcetStudent = {
    solveJs : true,
    createProject : true
}

gcetStudent.__proto__ = student ; //prototypal inheritance
// inherited properties from parent function
console.log(gcetStudent.name);
console.log(gcetStudent.canTalk);

console.log(gcetStudent.solveJs);

student.newobj = gcetStudent;
