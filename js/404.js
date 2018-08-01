var degree = 0;

function rotate() {
    $planet = $("div.planet");
    $planet.css({
        'transform': 'rotate(' + degree + 'deg)'
    });
    $planet.css({
        WebkitTransform: 'rotate(' + degree * 2 + 'deg)'
    });
    $planet.css({
        '-moz-transform': 'rotate(' + degree + 'deg)'
    });
    $planet.css({
        '-ms-transform': 'rotate(' + degree + 'deg)'
    });
    $planet.css({
        '-o-transform': 'rotate(' + degree + 'deg)'
    });
    var timer = setTimeout(function () {
        degree -= 0.1;
        rotate();
    }, 10);
}

function dogRun() {
    var dog = $("div.dog");
    var timer2 = setTimeout(function () {
        if (dog.css("background-position") == "0px 0px")
            dog.css({
                "background-position": "-80px -2px"
            });
        else
            dog.css({
                "background-position": "0px 0px"
            });
        dogRun();
    }, 130);
}