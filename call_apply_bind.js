let name = {
    firstname:"Nishit",
    lastname: "Patel",
    printFullName: function (){
        console.log(this.firstname + " " + this.lastname);
    }
}
name.printFullName();

let name2 = {
    firstname:"Sachin",
    lastname:"Tendulkar",
}
name.printFullName.call(name2)

let printDetails = function (city,native){
    console.log(this.firstname+" "+this.lastname+" "+city+" "+native);
}

//apply method
//in call method we pass arg separately
//while in apply we pass as an array
printDetails.apply(name2 , ['Anand','Menpura'])


//bind method
//It returns a copy of method which can be invoked later

let getPlace = printDetails.bind(name2,"Anand","Kathlal");
console.log(getPlace);
getPlace();
