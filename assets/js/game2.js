window.onload = function () {
    //player's character after selection

    var hp = [];
    var ap = [];
    var app = [];
    var cp = [];
    var pImage = [];
    var pName = [];



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
        hp: 10,
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

    var morigann = {
        id: 0,
        name: "Morigann",
        hp: 10,
        ap: 10,
        cp: 1,
        image: '<img src="assets/images/morriganAttack.gif" class="images">',
        location: '#conContOne'
    }

    var alcard = {
        id: 1,
        name: "Alcard Dracula",
        hp: 200,
        ap: 10,
        cp: 2,
        image: '<img src="assets/images/villainTwo.gif" class="images">',
        location: '#conContTwo'
    }

    var boneDragon = {
        id: 2,
        name: "Bone Dragon",
        hp: 300,
        ap: 10,
        cp: 3,
        image: '<img src="assets/images/villainThree.gif" class="images">',
        location: "#conContThree"
    }

    var merman = {
        id: 3,
        name: "Mermandia",
        hp: 400,
        ap: 10,
        cp: 4,
        image: '<img src="assets/images/merman.gif" class="images">',
        location: "#conContFour"
    }

    var dracula = {
        id: 4,
        name: "Vlad Dracula",
        hp: 500,
        ap: 10,
        cp: 5,
        image: '<img src="assets/images/villainFour.gif" class="images">',
        location: "#conContBoss"
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
        hp.push(simon.hp)
        ap.push(simon.ap)
        cp.push(simon.cp)
        pImage.push(simon.image)
        pName.push(simon.name)
        $("#playerCont").append(simon.image)
        $("#textCont").slideDown("slow")
        $("#textUpdate").text(simon.name + ", click on a MONSTER to engage them in battle.")

    })

    $("#charSelTwo").click(function () {
        hp.push(strider.hp)
        ap.push(strider.ap)
        cp.push(strider.cp)
        pImage.push(strider.image)
        pName.push(strider.name)
        $("#playerCont").append(strider.image)
        $("#textCont").slideDown("slow")
        $("#textUpdate").text(strider.name + ", click on a MONSTER to engage them in battle.")
    })
    $("#charSelThree").click(function () {
        hp.push(ryu.hp)
        ap.push(ryu.ap)
        cp.push(ryu.cp)
        pImage.push(ryu.image)
        pName.push(ryu.name)
        $("#playerCont").append(ryu.image)
        $("#textCont").slideDown("slow")
        $("#textUpdate").text(ryu.name + ", click on a MONSTER to engage them in battle.")
    })

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

    // $("#conContOne").click(function () {



    // })
    $(".conCont").click(function (conContID) {
        $(this).data('clicked', true);
        var vhp = [];
        var vap = [];
        var vcp = [];
        var vpImage = [];
        var vpName = [];
        var vpLocation = [];
        console.log(vpName)

        if ($("#conContOne").data('clicked')) {
            $(this).data('clicked', true)
            vhp.shift()
            vap.shift()
            vcp.shift()
            vpImage.shift()
            vpName.shift()
            vpLocation.shift()
            vhp.push(morigann.hp)
            vap.push(morigann.ap)
            vcp.push(morigann.cp)
            vpImage.push(morigann.image)
            vpName.push(morigann.name)
            vpLocation.push(morigann.location)
            $(".popup").slideDown("slow");
            $("#choiceCont").html('<div id="confirmB" class="menuButt"><p>Confirm?</p></div><div id="abandonB" class="menuButt"><p>Abandon?</p>')
            $("#textUpdate").text("Do you wish to fight " + vpName[0] + "?");
        }
        if ($("#conContTwo").data('clicked')) {
            $(this).data('clicked', true)
            vhp.shift()
            vap.shift()
            vcp.shift()
            vpImage.shift()
            vpName.shift()
            vpLocation.shift()
            vhp.push(alcard.hp)
            vap.push(alcard.ap)
            vcp.push(alcard.cp)
            vpImage.push(alcard.image)
            vpName.push(alcard.name)
            vpLocation.push(alcard.location)
            $(".popup").slideDown("slow");
            $("#choiceCont").html('<div id="confirmB" class="menuButt"><p>Confirm?</p></div><div id="abandonB" class="menuButt"><p>Abandon?</p>')
            $("#textUpdate").text("Do you wish to fight " + vpName[0] + "?");
        }
        if ($("#conContThree").data('clicked')) {
            $(this).data('clicked', true)
            vhp.shift()
            vap.shift()
            vcp.shift()
            vpImage.shift()
            vpName.shift()
            vpLocation.shift()

            vhp.push(boneDragon.hp)
            vap.push(boneDragon.ap)
            vcp.push(boneDragon.cp)
            vpImage.push(boneDragon.image)
            vpName.push(boneDragon.name)
            vpLocation.push(boneDragon.location)
            $(".popup").slideDown("slow");
            $("#choiceCont").html('<div id="confirmB" class="menuButt"><p>Confirm?</p></div><div id="abandonB" class="menuButt"><p>Abandon?</p>')
            $("#textUpdate").text("Do you wish to fight " + vpName[0] + "?");
        }
        if ($("#conContFour").data('clicked')) {
            $(this).data('clicked', true)
            vhp.shift()
            vap.shift()
            vcp.shift()
            vpImage.shift()
            vpName.shift()
            vpLocation.shift()
            vhp.push(merman.hp)
            vap.push(merman.ap)
            vcp.push(merman.cp)
            vpImage.push(merman.image)
            vpName.push(merman.name)
            vpLocation.push(merman.location)
            $(".popup").slideDown("slow");
            $("#choiceCont").html('<div id="confirmB" class="menuButt"><p>Confirm?</p></div><div id="abandonB" class="menuButt"><p>Abandon?</p>')
            $("#textUpdate").text("Do you wish to fight " + vpName[0] + "?");
        }

        $("#confirmB").click(function () {
            $(this).data('clicked', true);
            if ($("#confirmB").data('clicked')) {
                $(".menuFight").slideDown("normal");
                $("#choiceCont").html('<div id="fightB" class="menuButt"><p>Attack!</p></div>')
                $("#textUpdate").text("The battle BEGINS: " + pName + " VS " + vpName[0] + " In a fight to the DEATH!");
                $("#heroFightPicture").html(pImage)
                $("#printfHP").text(hp);
                $("#printfAP").text(ap);
                $("#printfCP").text(cp);
                $("#villainFightPicture").html(vpImage)
                $("#printvHP").text(vhp);
                $("#printvAP").text(vap);
                $("#printvCP").text(vcp);

                attackAttack = [];
                $("#fightB").click(function () {
                    if (vhp > 0) {
                        // app
                        ap++
                        $("#heroFightUpdates").text(pName + " Attacks!!");
                        $("#villainFightUpdates").text(vpName + " Counters!")
                        vhp = vhp - ap
                        hp = hp - vcp
                        $("#printvHP").text(vhp);
                        $("#printfHP").text(hp)
                    }
                    else if (vhp <= 0) {
                        $("#heroFightUpdates").text(pName + " Is VICTORIOUS!!");
                        $("#villainFightUpdates").text(vpName + " Is DEAD!")
                        $("#choiceCont").html('<div id="mapB" class="menuButt"><p>Map</p></div>')
                        $("#mapB").click(function () {
                            $(".menuFight").slideUp("normal");
                            $("#playerCont").html(pImage)
                            $("#textCont").slideDown("slow")
                            $("#textUpdate").text(pName + ", click on a MONSTER to engage them in battle.")
                            $("#choiceCont").html('')
                            $(vpLocation[0]).fadeOut("slow")
                            vhp.shift()
                            vap.shift()
                            vcp.shift()
                            vpImage.shift()
                            vpName.shift()
                            vpLocation.shift()
                            vhp.pop()
                            vap.pop()
                            vcp.pop()
                            vpImage.pop()
                            vpName.pop()
                            vpLocation.pop()

                        });
                    }
                    if (hp <= 0) {
                        $("#heroFightUpdates").text(pName + " Is DEAD!!");
                        $("#villainFightUpdates").text(vpName + " Is VICTORIOUS!")
                        $("#choiceCont").html('<div id="gameOver" class="menuButt"><p>Reset</p></div>')
                        $("#gameOver").click(function () {
                            location.reload(true)

                        })
                    }
                })

            }
        });

        $("#abandonB").click(function () {
            $(this).data('clicked', true);

            if ($("#abandonB").data('clicked')) {
                $("#choiceCont").slideUp("fast");
                $("#textUpdate").text(pName + ", click on a MONSTER to engage them in battle.")
                vhp.shift()
                vap.shift()
                vcp.shift()
                vpImage.shift()
                vpName.shift()
                vpLocation.shift()
                vhp.pop()
                vap.pop()
                vcp.pop()
                vpImage.pop()
                vpName.pop()
                vpLocation.pop()
            };
        });

    })





    // $("#conContTwo").click(function () {
    //     $(".popup").slideDown("slow");
    //     $("#textUpdate").text("Do you wish to fight Alcard?")

    //     $("#confirmB").click(function () {
    //         $(".menuFight").slideDown("normal");
    //         $(".popup").slideUp("fast");
    //         vhp.push(vlad.hp)
    //         vap.push(vlad.ap)
    //         vcp.push(vlad.cp)
    //         vpImage.push(vlad.image)
    //         vpName.push(vlad.name)
    //         $("#printHP").text(hp);
    //         $("#printAP").text(ap);
    //         $("#printCP").text(cp);
    //         $("#printvHP").text(vhp);
    //         $("#printvAP").text(vap);
    //         $("#printvCP").text(vcp);
    //     })
    //     $("#abandonB").click(function () {
    //         $("#choiceCont").slideUp("fast");
    //         $("#textUpdate").text(pName + ", click on a MONSTER to engage them in battle.")
    //     })


    // })

    // $("#conContThree").click(function () {
    //     $(".popup").slideDown("slow");
    //     $("#textUpdate").text("Do you wish to fight Merman?")

    //     $("#confirmB").click(function () {
    //         $(".menuFight").slideDown("normal");
    //         $(".popup").slideUp("fast");
    //         vhp.push(merman.hp)
    //         vap.push(merman.ap)
    //         vcp.push(merman.cp)
    //         vpImage.push(merman.image)
    //         vpName.push(merman.name)
    //         $("#printHP").text(hp);
    //         $("#printAP").text(ap);
    //         $("#printCP").text(cp);
    //         $("#printvHP").text(vhp);
    //         $("#printvAP").text(vap);
    //         $("#printvCP").text(vcp);
    //     })
    //     $("#abandonB").click(function () {
    //         $("#choiceCont").slideUp("fast");
    //         $("#textUpdate").text(pName + ", click on a MONSTER to engage them in battle.")
    //     })


    // })

    // $("#conContFour").click(function () {
    //     $(".popup").slideDown("slow");
    //     $("#textUpdate").text("Do you wish to fight Bone Dragon?")


    //     $("#confirmB").click(function () {
    //         $(".menuFight").slideDown("normal");
    //         $(".popup").slideUp("fast");
    //         vhp.push(boneDragon.hp)
    //         vap.push(boneDragon.ap)
    //         vcp.push(boneDragon.cp)
    //         vpImage.push(boneDragon.image)
    //         vpName.push(boneDragon.name)
    //         $("#printHP").text(hp);
    //         $("#printAP").text(ap);
    //         $("#printCP").text(cp);
    //         $("#printvHP").text(vhp);
    //         $("#printvAP").text(vap);
    //         $("#printvCP").text(vcp);
    //     })
    //     $("#abandonB").click(function () {
    //         $("#choiceCont").slideUp("fast");
    //         $("#textUpdate").text(pName + ", click on a MONSTER to engage them in battle.")
    //     })


    // })

    // $("#conContBoss").click(function () {
    //     $(".popup").slideDown("slow");
    //     $("#textUpdate").text("Do you wish to fight DRACULA!?")

    //     $("#confirmB").click(function () {
    //         $(".menuFight").slideDown("normal");
    //         $(".popup").slideUp("fast");
    //         vhp.push(dracula.hp)
    //         vap.push(dracula.ap)
    //         vcp.push(dracula.cp)
    //         vpImage.push(dracula.image)
    //         vpName.push(dracula.name)
    //     })
    //     $("#abandonB").click(function () {
    //         $("#choiceCont").slideUp("fast");
    //         $("#textUpdate").text(pName + ", click on a MONSTER to engage them in battle.")
    //     })


    // })

}

