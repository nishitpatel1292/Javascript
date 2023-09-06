// map method is used when we want transformation of whole array.
// 2. filter is used when we want to filter the array to obtain required value.
// 3. reduce is used when we want to reduce the array to single value eg (max, min, avg, sum, difference etc).
// 4. reduce passes two arguments one function(which includes accumulator and initial value as argument itself) and another initial value of accumulator.

const arr = [1, 3, 4, 2, 5];
//*******************map function*******************
function double(x) { return x * 2; }
const doubled = arr.map(double);
console.log(doubled);

const square = arr.map(function (x) { return x * x; })
console.log(square);

const users = [
    { firstname: 'Nishit', lastname: 'Patel', age: 31 },
    { firstname: 'Adarsh', lastname: 'Patel', age: 22 },
    { firstname: 'Rahul', lastname: 'Khan', age: 22 }
]
const fullnames = users.map(x => {
    return x.firstname + " " + x.lastname;
})
console.log(fullnames);

//*******************filter function*******************
// It includes values that evaluate to true or are non-zero according to the condition you provide
function isOdd(x) {
    return x % 2; //0 for even non zero for odd
}
// const filtered = arr.filter(isOdd);
const filtered = arr.filter((x) => x > 3);
console.log(filtered);

//get firstnames of people having age less than 30
const firstnames = users.filter((x) =>x.age<30)
                        .map((x) => x.firstname);
console.log(firstnames);

//*******************reduce function*******************
// The reduce function accumulates a list of values into a single result by applying a specified operation to each element
// include summing, finding max/min, and string concatenation.
const output = arr.reduce(function (sum, num) {
    sum += num;
    return sum;
})
const max = arr.reduce(function (max, num) {
    if (max < num)
        max = num;
    return max;
}, 0) //0 is initialvalue for accumulator i.e, max here, this argument which is not mandatory
const multiply = arr.reduce(function (mul, num) {
    mul *= num;
    return mul;
}, 1);
console.log(output);
console.log(max);
console.log(multiply);

// want object holding age of people

const ages = users.reduce(function (acc, current) {
    if (acc[current.age]) {
        acc[current.age]++;
        console.log(current);
    }
    else {
        acc[current.age] = 1;
    }
    return acc;
}, {});
console.log(ages);

//get firstnames of people having age less than 30
const fnames = users.reduce(function(acc,current){
    if (current.age<30){
        acc.push(current.firstname);
    }
    return acc;
},[]);
console.log(fnames);