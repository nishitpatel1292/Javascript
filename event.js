const btn = document.getElementById('btn1');
const clickHandler = function () {
  console.log('button clicked!');
};
btn.addEventListener("click",
  clickHandler);
// btn.removeEventListener('click',clickHandler); //to remove eventlistener