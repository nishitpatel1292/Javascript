// Promises are a fundamental concept in JavaScript that allow you to work with asynchronous operations in a more structured and manageable way. 
// Promises provide a cleaner alternative to callbacks for handling asynchronous code. 

const myPromise = new Promise((resolve, reject) => {
    // Asynchronous operation, e.g., fetching data or reading a file
    setTimeout(() => {
        const data = 'Promise resolved with this data';
        resolve(data); // Resolve the promise with the data
    }, 1000);
});

myPromise.then((result)=>{
    console.log(result);
})

const myPromise1 = new Promise((resolve, reject) => {
    // Asynchronous operation, e.g., fetching data or reading a file
    setTimeout(() => {
        const data = 'Promise1 resolved with this data';
        resolve(data); // Resolve the promise with the data
    }, 2000);
});

const myPromise2 = new Promise((resolve, reject) => {
    // Asynchronous operation, e.g., fetching data or reading a file
    setTimeout(() => {
        const data = 'Promise2 resolved with this data';
        resolve(data); // Resolve the promise with the data
    }, 2000);
});

const promises = [
    myPromise1,
    myPromise2
];

function parallel(){
    Promise.all(promises)
            .then((result)=>{
                    console.log(result);
            })
            .catch((result)=>{
                console.log(result);
            });
}


parallel();
