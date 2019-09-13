window.onload = function () {
    //player's character after selection

    var hp = [];
    var ap = [];
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

    var morigann = {
        id: 0,
        name: "Morigann",
        hp: 10,
        ap: 10,
        cp: 1,
        image: '<img src="assets/images/morriganAttack.gif" class="images">'
    }

    var alcard = {
        id: 1,
        name: "Alcard Dracula",
        hp: 200,
        ap: 10,
        cp: 2,
        image: '<img src="assets/images/villainTwo.gif" class="images">'
    }

    var boneDragon = {
        id: 2,
        name: "Bone Dragon",
        hp: 300,
        ap: 10,
        cp: 3,
        image: '<img src="assets/images/villainThree.gif" class="images">'
    }

    var merman = {
        id: 3,
        name: "Mermandia",
        hp: 400,
        ap: 10,
        cp: 4,
        image: '<img src="assets/images/merman.gif" class="images">'
    }

    var dracula = {
        id: 4,
        name: "Vlad Dracula",
        hp: 500,
        ap: 10,
        cp: 5,
        image: '<img src="assets/images/villainFour.gif" class="images">'
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
    $(".conCont").click(function(conContID){
        $(this).data('clicked', true);
        var vhp = [];
        var vap = [];
        var vcp = [];
        var vpImage = [];
        var vpName = [];
        if ($("#conContOne").data('clicked')) {
            vhp.shift()
            vap.shift()
            vcp.shift()
            vpImage.shift()
            vpName.shift()
            vhp.push(morigann.hp)
            vap.push(morigann.ap)
            vcp.push(morigann.cp)
            vpImage.push(morigann.image)
            vpName.push(morigann.name)
            $(".popup").slideDown("slow");
            $("#choiceCont").html('<div id="confirmB" class="menuButt"><p>Confirm?</p></div><div id="abandonB" class="menuButt"><p>Abandon?</p>')
            $("#textUpdate").text("Do you wish to fight " + vpName + "?");
        }
        if ($("#conContTwo").data('clicked')) {
            vhp.shift()
            vap.shift()
            vcp.shift()
            vpImage.shift()
            vpName.shift()
            vhp.push(alcard.hp)
            vap.push(alcard.ap)
            vcp.push(alcard.cp)
            vpImage.push(alcard.image)
            vpName.push(alcard.name)
            $(".popup").slideDown("slow");
            $("#choiceCont").html('<div id="confirmB" class="menuButt"><p>Confirm?</p></div><div id="abandonB" class="menuButt"><p>Abandon?</p>')
            $("#textUpdate").text("Do you wish to fight " + vpName + "?");
        }
        if ($("#conContThree").data('clicked')) {
            vhp.shift()
            vap.shift()
            vcp.shift()
            vpImage.shift()
            vpName.shift()
            vhp.push(merman.hp)
            vap.push(merman.ap)
            vcp.push(merman.cp)
            vpImage.push(merman.image)
            vpName.push(merman.name)
            $(".popup").slideDown("slow");
            $("#choiceCont").html('<div id="confirmB" class="menuButt"><p>Confirm?</p></div><div id="abandonB" class="menuButt"><p>Abandon?</p>')
            $("#textUpdate").text("Do you wish to fight " + vpName + "?");
        }
        if ($("#conContFour").data('clicked')) {
            vhp.shift()
            vap.shift()
            vcp.shift()
            vpImage.shift()
            vpName.shift()
            vhp.push(boneDragon.hp)
            vap.push(boneDragon.ap)
            vcp.push(boneDragon.cp)
            vpImage.push(boneDragon.image)
            vpName.push(boneDragon.name)
            $(".popup").slideDown("slow");
            $("#choiceCont").html('<div id="confirmB" class="menuButt"><p>Confirm?</p></div><div id="abandonB" class="menuButt"><p>Abandon?</p>')
            $("#textUpdate").text("Do you wish to fight " + vpName + "?");
        }

        $("#confirmB").click(function () {
            $(this).data('clicked', true);
            if ($("#confirmB").data('clicked')) {
                $(".menuFight").slideDown("normal");
                $("#choiceCont").html('<div id="fightB" class="menuButt"><p>Attack!</p></div>')
                $("#textUpdate").text("The battle BEGINS: " + pName + " VS " + vpName + " In a fight to the DEATH!");
                $("#heroFightPicture").html(pImage)
                $("#printfHP").text(hp);
                $("#printfAP").text(ap);
                $("#printfCP").text(cp);
                $("#villainFightPicture").html(vpImage)
                $("#printvHP").text(vhp);
                $("#printvAP").text(vap);
                $("#printvCP").text(vcp);


                // var enableAttack = function(ele) {
                //     $("#fightB").removeAttr("disabled");
                // }
                // var that = this;
                // $(this).attr("disabled", true);
                //  setTimeout(function() { enableAttack(that) }, 5000);
                
                attackAttack = [];
                $("#fightB").click(function () {
                    if (vhp > 0) {
                    $("#heroFightUpdates").text(pName + " Attacks!!");
                    $("#villainFightUpdates").text(vpName + " Counters!")
                    vhp-- 
                    hp--
                    $("#printvHP").text(vhp);
                    $("#printHP").text(hp)
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

                    });
                }
                    else if (hp <= 0) {
                    $("#heroFightUpdates").text(pName + " Is DEAD!!");
                    $("#villainFightUpdates").text(vpName + " Is VICTORIOUS!")
                    $("#choiceCont").html('<div id="gameOver" class="menuButt"><p>Reset</p></div>')
                    }

                })

            }
        });
        
        $("#abandonB").click(function () {
            $(this).data('clicked', true);
            
            if ($("#abandonB").data('clicked')) {
                $("#choiceCont").slideUp("fast");
                $("#textUpdate").text(pName + ", click on a MONSTER to engage them in battle.")
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

