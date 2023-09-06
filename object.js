//   Objects are associative arrays with several special features.

// They store properties (key-value pairs), where:

//     Property keys must be strings or symbols (usually strings).
//     Values can be of any type.

// To access a property, we can use:

//     The dot notation: obj.property.
//     Square brackets notation obj["property"]. Square brackets allow taking the key from a variable, like obj[varWithKey].

// Additional operators:

//     To delete a property: delete obj.prop.
//     To check if a property with the given key exists: "key" in obj.
//     To iterate over an object: for (let key in obj) loop.

// What we’ve studied in this chapter is called a “plain object”, or just Object.

// There are many other kinds of objects in JavaScript:

//     Array to store ordered data collections,
//     Date to store the information about the date and time,
//     Error to store the information about an error.

let user = new Object();
user ={};
let key = "id";
user.name = "nishit";
user[key]=45;
console.log(user.key);

console.log(user);
console.log(delete user.id);
console.log(user);

let fruit = "apple";

let bag = {
    0: "Nike",
    [fruit] : 4,
}
console.log(bag);

let key2 = "price"; 
//can also take as input like in 
// promt : prompt("enter key for object");
bag[key2] = 45;

console.log(bag);

//can use more complex expressions inside square brackets

let gadget = {
    [fruit + 'Phone']:7 //gadget.applePhone
}

function makeUser(model,total){
    return {
        model,
        total
    }
}
//shorthand
let phone = makeUser("iphone6",7);
console.log(phone.model+": "+ phone.total);

function makeUser2(price){
    return {
        itemNo:"47",
        price,
    }
}
let art = makeUser2(7200);
console.log(art);

//"in" special operator

console.log("price" in art);
console.log("Nishit" in art);

let user3 = {
    proUser: "false",
    premiumUser:"false"
}

let newUser = Object.assign(user,{proUser:"true"});
console.log(newUser);


//a variable cannot have a name equal to one of the language-reserved words like “for”, “let”, “return” etc
//But for an object property, there’s no such restriction:
let obj = {
    for: 1,
    let: 2,
    return: 3
  };
  
  console.log( obj.for + obj.let + obj.return );

  let str = user2.toString();
  console.log(str); 
  str = user2.valueOf();
  console.log(str);
