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

