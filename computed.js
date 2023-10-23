const red = document.querySelector('.red');
const blue = document.querySelector('.blue');
const green = document.querySelector('.green');


const center = document.querySelector('.center');

const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('mouseenter', function (){
        center.style.backgroundColor = window.getComputedStyle(box).backgroundColor
    });
});

const getRGBColor  =  (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor
}
const color = getRGBColor(green);
console.log(color)

let timer;
// Add a mousemove event listener to the document

document.addEventListener("mousemove", (e) => {
    // Update the mouse position elements with the current cursor position
    clearTimeout(timer);

    timer = setTimeout(() => {
        // console.log(e.clientX,e.clientY);
    },100);
});




function playAudio() {
    const audio = document.getElementById("myAudio");
    audio.currentTime = 0; // Reset the audio to the beginning
    audio.play(); // Start playing from the beginning
}
