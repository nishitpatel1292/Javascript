// async/await is a feature  that provides a more concise and readable way to work with asynchronous code in JavaScript.
//  It builds on top of promises and makes asynchronous code appear more like synchronous code, which can be easier to understand and maintain.


// To use await, you first need to declare a function as async. 
// An async function always returns a promise implicitly, even if you don't explicitly return a promise.

function resolveAfter2Seconds() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // Expected output: "resolved"
  }
  
  asyncCall();
  