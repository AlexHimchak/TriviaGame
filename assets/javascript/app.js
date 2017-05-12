$(document).ready(function() {
    var unanswered = 0;
    var right = 0;
    var wrong = 0;
    var number = 10;
    var temp = 2;
    var temp2 = 2;
    var temp3 = 2;
    var intervalId;

    $('#container').hide();

    $("#stop").on("click", stop);

    $("#resume").on("click", run);

    $(".button").on("click", function() {
        $("#container").show();
        $("#start").hide();
        run();

    });

    function run() {
        intervalId = setInterval(decrement, 1000);
    }

    function decrement() {

        number -= 1;

        $("#timer").html("Time Remaining: " + number);

        if (number === 0) {

            stop();

            alert("Time Up!");
            right = temp + temp2 + temp3;
            if (temp === 0) {
                wrong++;
            }
            if (temp2 === 0) {
               wrong++;
            }
            if (temp3===0){
               wrong++
            }
            if (temp === 2) {
                right = right - 2;
                unanswered++;
            }
            if (temp2 === 2) {
                right = right - 2;
                unanswered++;
            }
             if (temp3 === 2) {
                right = right - 2;
                unanswered++;
            }

            $("#container").css("background-image", "url(assets/images/dk2.jpg)");
            $("#container").html("<h2>" + "GAME OVER! " + "<br>" + "Right Answers: " + right + "<br>" + "Wrong Answers: " + wrong + "<br>" + "Unanswered: " + unanswered + "</h2>");

        }
    }

    function stop() {

        clearInterval(intervalId);
    }




    $("input[name='character']").click(function() {
        var charValue = $("input[name='character']:checked").val();

        if (charValue === "DK") {
            temp = 1;

        } else {
            temp = 0;
        }


    });


    $("input[name='capture']").click(function() {

        var capValue = $("input[name='capture']:checked").val();
        if (capValue === "diddy") {
            temp2 = 1;
            console.log(right);
        } else {
            temp2 = 0;

        }
    });
        $("input[name='fruit']").click(function() {

        var capValue = $("input[name='fruit']:checked").val();
        if (capValue === "bananas") {
            temp3 = 1;
            console.log(right);
        } else {
            temp3 = 0;

        }
    });


});
