var fruits = ["Apple", "Banana"];

for (let x of fruits) {
    console.log(x);
}

for (let x in fruits) {
    console.log(fruits[x]);
}
fruits.forEach(x => {
    console.log(x);
});

// iterator -> provides authority to access items as per need
let carrier = fruits[Symbol.iterator]();

// console.log(carrier.next().value);
// console.log(carrier.next().value);
// console.log(carrier.next().done);
let result = carrier.next();
while (!result.done) {
    console.log(result.value);
    result = carrier.next();
}

