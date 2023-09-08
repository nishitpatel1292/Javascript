function Counter(){
    var count=0;
    this.increment = function(){
        count++;
        console.log(count);
    }
    this.decrement = function(){
        count--;
        console.log(count);
    }
}
var counter1 = new Counter();
counter1.increment();
counter1.decrement();

//second way
const createCounter = () => {
    let counter = 0;
    
    const increment = () => {
      counter += 1;
      return counter;
    };
  
    const getCounter = () => {
      return counter;
    };
  
    return {
      increment,
      getCounter,
    };
  };
  let counter = createCounter();
  console.log(counter.increment());
  console.log(counter.increment());
  console.log(counter.increment());
  console.log(counter.getCounter());