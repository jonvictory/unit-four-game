window.onload = function () {

    var hp = [];
    var ap = [];
    var cp = [];

    var heroArray = [simon, strider, ryu];

    var simon = {
        id: 0,
        name: "Simon Belmont",
        hp: 800,
        ap: 4,
        cp: 3
    }


    var strider = {
        id: 1,
        name: "Strider",
        hp: 600,
        ap: 8,
        cp: 2
    }

    var ryu = {
        id: 2,
        name: "Ryu Hayabusa",
        hp: 400,
        ap: 10,
        cp: 10

    }
   

    $(".startScreen").click(function () {
        $(".startScreen").fadeOut("slow");
        $(".charSelbg").fadeIn("slow");
        $(".charSelect").fadeIn("slow");
    })

    var flashInterval;

    $('.charOne').hover(
        function () {
        flashInterval = setInterval(function () {
            $('.charOne').toggleClass('red-border');
        }, 500);
    }, function () {
        clearInterval(flashInterval);
        $('.charOne').removeClass('red-border');
    });

    $(".charOne").click(function () {

        $("#charSelOne").fadeIn("slow");
        $(".nameStats").text(simon.name)
        $(".hpStats").text(simon.hp)
        $(".apStats").text(simon.ap)
        $(".cpStats").text(simon.cp)

        if ($("#charSelTwo").css("display") == "block") {
            $("#charSelTwo").fadeOut("normal");
        }
        else if ($("#charSelThree").css("display") == "block") {
            $("#charSelThree").fadeOut("normal");
        }
        console.log($("#charSelTwo").css("display") === "block")
        // $("#pSelStatsOne").text()
        // $(".charSelect").fadeIn("slow");

    })

    $('.charTwo').hover(
        function () {
        flashInterval = setInterval(function () {
            $('.charTwo').toggleClass('red-border');
        }, 500);
    }, function () {
        clearInterval(flashInterval);
        $('.charTwo').removeClass('red-border');
    });

    $(".charTwo").click(function () {
        $("#charSelTwo").fadeIn("slow");
        $(".nameStats").text(strider.name)
        $(".hpStats").text(strider.hp)
        $(".apStats").text(strider.ap)
        $(".cpStats").text(strider.cp)

        if ($("#charSelOne").css("display") == "block") {
            $("#charSelOne").fadeOut("normal");
        }
        else if ($("#charSelThree").css("display") == "block") {
            $("#charSelThree").fadeOut("normal");
        }
        // $(".charSelect").fadeIn("slow");
    })

    $('.charThree').hover(
        function () {
        flashInterval = setInterval(function () {
            $('.charThree').toggleClass('red-border');
        }, 500);
    }, function () {
        clearInterval(flashInterval);
        $('.charThree').removeClass('red-border');
    });

    $(".charThree").click(function () {
        $("#charSelThree").fadeIn("slow");
        $(".nameStats").text(ryu.name)
        $(".hpStats").text(ryu.hp)
        $(".apStats").text(ryu.ap)
        $(".cpStats").text(ryu.cp)
        if ($("#charSelOne").css("display") == "block") {
            $("#charSelOne").fadeOut("normal");
        }
        else if ($("#charSelTwo").css("display") == "block") {
            $("#charSelTwo").fadeOut("normal");
        }
        // $(".charSelect").fadeIn("slow");
    })

    $(".charSelected").click(function () {
        $(".charSelbg").fadeOut("slow");
        $(".charSelect").fadeOut("slow");
        $(".charSelected").fadeOut("slow");
        
        $(".bg").fadeIn("slow");
    })

    $("#fightAreaOne").click(function () {
        $(".menu").slideDown("slow");
    })
}