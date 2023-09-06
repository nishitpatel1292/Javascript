
let user = {
    firstname:"Nishit",
    sayHi() {
        console.log("Hey there!",this.firstname);
    }
}
setTimeout(function(){
    user.sayHi();
},1000);
let fun = user.sayHi.bind(user);
setTimeout(fun,1000);