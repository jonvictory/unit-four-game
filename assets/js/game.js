window.onload = function () {
    //player's character after selection

    var hp = [];
    var ap = [];
    var cp = [];
    var pImage = [];

    var heroArray = [simon, strider, ryu];

    var simon = {
        id: 0,
        name: "Simon Belmont",
        hp: 800,
        ap: 4,
        cp: 3,
        image: '<img src="assets/images/simonWalking.gif" class="images">'
    }


    var strider = {
        id: 1,
        name: "Strider",
        hp: 600,
        ap: 8,
        cp: 2,
        image: '<img src="assets/images/heroStrider.gif" class="images">'
    }

    var ryu = {
        id: 2,
        name: "Ryu Hayabusa",
        hp: 400,
        ap: 10,
        cp: 10,
        image: '<img src="assets/images/heroNinja.gif" class="images">'
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
        }, 300);
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
        }, 300);
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
        }, 300);
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
    })

    $(".charSelected").click(function () {
        $(".charSelbg").fadeOut("slow");
        $(".charSelect").fadeOut("slow");
        $(".charSelected").fadeOut("slow");
        
        $(".bg").fadeIn("slow");
    })
    $("#charSelOne").click(function () {
        $("#playerCont").append(simon.image)
        hp.push(simon.hp)
        ap.push(simon.ap)
        cp.push(simon.cp)
        pImage.push(simon.image)
    })

    $("#charSelTwo").click(function () {
        $("#playerCont").append(strider.image)
        hp.push(strider.hp)
        ap.push(strider.ap)
        cp.push(strider.cp)
        pImage.push(strider.image)
    })
    $("#charSelThree").click(function () {
        $("#playerCont").append(ryu.image)
        hp.push(ryu.hp)
        ap.push(ryu.ap)
        cp.push(ryu.cp)
        pImage.push(ryu.image)
    })
console.log(hp)
console.log(ap)
console.log(cp)
    // Begin World Map Activities

    $("#menuB").click(function () {
        $("header").slideToggle("slow");
        $("#printHP").text(hp);
        $("#printAP").text(ap);
        $("#printCP").text(cp);
    })

    //image animation attempts.

    // var x;
    // var y;
    // var xi;
    // var yi;
    // var xToMove;
    // var yToMove;
    // $("#conContTwo").click(function(){
    //    x = $(this).offset().top;
    //    y = $(this).offset().left;
    //     xi = $("#playerCont").offset().top
    //     yi = $("#playerCont").offset().left
    //     console.log(x)
    //     console.log(y)
    //     console.log(xi)
    //     console.log(yi)
    //     xToMove = x - xi;
    //     yToMove = y - yi;
    //     console.log(xToMove)
    //     console.log(yToMove)
    // })
    // $("#conContThree").click(function(){
    //     x = $(this).offset().top;
    //     y = $(this).offset().left;
    //      xi = $("#playerCont").offset().top
    //      yi = $("#playerCont").offset().left
    //      console.log(x)
    //      console.log(y)
    //      console.log(xi)
    //      console.log(yi)
    //      xToMove = x - xi;
    //      yToMove = y - yi;
    //      console.log(xToMove)
    //      console.log(yToMove)
    //  })
    //  $("#conContFour").click(function(){
    //     x = $(this).offset().top;
    //     y = $(this).offset().left;
    //      xi = $("#playerCont").offset().top
    //      yi = $("#playerCont").offset().left
    //      console.log(x)
    //      console.log(y)
    //      console.log(xi)
    //      console.log(yi)
    //      xToMove = x - xi;
    //      yToMove = y - yi;
    //      console.log(xToMove)
    //      console.log(yToMove)
    //  })
    //  $("#conContBoss").click(function(){
    //     x = $(this).offset().top;
    //     y = $(this).offset().left;
    //      xi = $("#playerCont").offset().top
    //      yi = $("#playerCont").offset().left
    //      console.log(x)
    //      console.log(y)
    //      console.log(xi)
    //      console.log(yi)
    //      xToMove = x - xi;
    //      yToMove = y - yi;
    //      console.log(xToMove)
    //      console.log(yToMove)
    //  })

    // $('#playerCont').click(function(){
    //     var pos1 = $(this).position();
    
    //     $(this).animate({ 'top': pos1.top + xToMove + 75, 'left': pos1.left + yToMove + 75}, 200, function(){
    //     $('#playerCont').appendTo($("#playerAppear"))
    //     });
    // });
      
    $("#conContOne").click(function () {
        $(".popup").slideDown("slow");
        
    })
    $("#confirmB").click(function () {
        $(".menuFight").slideDown("normal");
    })
    $("#abandonB").click(function () {
        $(".popup").slideUp("fast");
    })
}

