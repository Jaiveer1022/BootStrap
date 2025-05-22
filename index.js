function x() {
    var i = 1;

    function mediator(i) {
        setTimeout(function () {
            console.log(i);
        }, i * 1000);
    }

    for (var i = 1; i < 7; i++) {
        mediator(i);
    }
    console.log("yo")
}
x();