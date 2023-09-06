function person(fname,lname){
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