//   push(...items) adds items to the end.
//   pop() removes the element from the end and returns it.
//   shift() removes the element from the beginning and returns it.
//   unshift(...items) adds items to the beginning.

//array too can have function

let fruits = [
    "Apple",
    "Orange",
    "Plum",
  ];

  console.log(fruits[fruits.length-1]);
  console.log(fruits.at(-1));
  
  fruits.push("banana");
  console.log(fruits);
  
  console.log(fruits.pop("Plum"));
  
  console.log(fruits);
  
  fruits.unshift('Kiwi');
  fruits.push('cherry')
  console.log(fruits);

  fruits.shift(); //remove the first one
  

  console.log(fruits);

  let arr = new Array(4);
  console.log(arr);

let arr2 = ["a", "b"];

arr2.push(function() {
  console.log( this );
});

(arr2[2]());
