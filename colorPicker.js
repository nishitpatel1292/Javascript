document.addEventListener("mouseover", function (e) {
    const element = document.elementFromPoint(e.clientX, e.clientY);
    const computedStyle = window.getComputedStyle(element);
    const color = computedStyle.backgroundColor;
    // Do something with the color
    console.log(color);
});
