// We should use ?. only where it’s ok that something doesn’t exist.

let user1 = {}
let user2 = {
    address:{
        street:"patel faliyu"
    }
}

console.log(user1?.address?.street);
console.log(user2?.address?.street);

//short-circuiting
let user3 = null;
let x = 0;

user3?.sayHi(x++); // no "user", so the execution doesn't reach sayHi call and x++

console.log(x);

// Other variants: ?.(), ?.[]
 


