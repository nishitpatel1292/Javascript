function x() {
    for (var i = 0; i < 3; i++) {
        function close(i) {
            setTimeout(function () {
                console.log(i)
            }
            , i * 1000);
        }
        close(i);
    }
}
x();
//var shows functional scope , point to same reference copy that't why it generates same value for each iteration
//to solve this we can use let or inner function which binds the setTimeout function