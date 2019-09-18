window.onload = function () {
//player's character after selection

    var hp = [];
    var ap = [];
    var cp = [];
    var pImage = [];
    var pImageAtt = [];
    var pName = [];
    var pVampsKilld = 0;

//player objects
    var simon = {
        id: 0,
        name: "Simon Belmont",
        hp: 800,
        ap: 4,
        cp: 3,
        image: '<img src="assets/images/simonWalking.gif" class="images">',
        imageAttack: '<img src="assets/images/simonAttacking.gif" class="imageCorr">'
    }


    var strider = {
        id: 1,
        name: "Strider",
        hp: 10,
        ap: 8,
        cp: 2,
        image: '<img src="assets/images/heroStrider.gif" class="images">',
        imageAttack: '<img src="assets/images/heroStrider.gif" class="imageCorr">'
    }

    var ryu = {
        id: 2,
        name: "Ryu Hayabusa",
        hp: 400,
        ap: 10,
        cp: 10,
        image: '<img src="assets/images/heroNinja.gif" class="images">',
        imageAttack: '<img src="assets/images/heroNinja.gif" class="imageCorr">'
    }
//villain objects
    var morigann = {
        id: 0,
        name: "Morigann",
        hp: 10,
        ap: 10,
        cp: 1,
        image: '<img src="assets/images/morriganAttack.gif" class="imageCorr">',
        location: '#conContOne'
    }

    var alcard = {
        id: 1,
        name: "Alcard Dracula",
        hp: 200,
        ap: 10,
        cp: 2,
        image: '<img src="assets/images/villainTwo.gif" style="width:300px; height: 300px;">',
        location: '#conContTwo'
    }

    var boneDragon = {
        id: 2,
        name: "Bone Dragon",
        hp: 300,
        ap: 10,
        cp: 3,
        image: '<img src="assets/images/villainThree.gif" class="imageCorr">',
        location: "#conContThree"
    }

    var merman = {
        id: 3,
        name: "Mermandia",
        hp: 400,
        ap: 10,
        cp: 4,
        image: '<img src="assets/images/merman.gif" class="imageCorr">',
        location: "#conContFour"
    }

    var dracula = {
        id: 4,
        name: "Vlad Dracula",
        hp: 500,
        ap: 10,
        cp: 5,
        image: '<img src="assets/images/villainFour.gif" class="imageCorr">',
        location: "#conContBoss"
    }



//start screen to character select
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
        pImageAtt.push(simon.imageAttack)
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
        pImageAtt.push(strider.imageAttack)
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
        pImageAtt.push(ryu.imageAttack)
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

    //image animation attempts. Couldn't get animation to work because the functions I found delete the elements that they animate.

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


    var vhp = ['ericHolder'];
    var vap = ['ericHolder'];
    var vcp = ['ericHolder'];
    var vpImage = ['ericHolder'];
    var vpName = ['ericHolder'];
    var vpLocation = ['ericHolder'];


    $("#conContOne").click(function () {
        $("#heroFightUpdates").empty()
        $("#villainFightUpdates").empty()
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
        $("#villainFightPicture").fadeIn("fast")
        $(".popup").slideDown("slow");
        $("#choiceCont").html('<div id="confirmB" class="menuButt"><p>Confirm?</p></div><div id="abandonB" class="menuButt"><p>Abandon?</p>')
        $("#textUpdate").text("Do you wish to fight " + vpName[0] + "?");

        $("#confirmB").click(function () {
            $(".menuFight").slideDown("normal");
            $("#choiceCont").html('<div id="fightB" class="menuButt"><p>Attack!</p></div>')
            $("#textUpdate").text("The battle BEGINS: " + pName + " VS " + vpName[0] + " In a fight to the DEATH!");
            $("#heroFightPicture").html(pImageAtt)
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

                    ap++

                    $("#heroFightUpdates").prepend('<br>' + pName + " Attacks!!");
                    $("#villainFightUpdates").prepend('<br>' + vpName + " Counters!")
                    $("#textUpdate").text( vpName + " is clever and deadly. Take care, " + pName + ", do not faulter!" )
                    vhp = vhp - ap
                    hp = hp - vcp
                    $("#printvHP").text(vhp);
                    $("#printfHP").text(hp)
                }

                else if (vhp <= ap) {
                    $("#heroFightUpdates").prepend('<br>' + pName + " Is VICTORIOUS!!");
                    $("#villainFightUpdates").prepend('<br>' + vpName + " Is DEAD!")
                    $("#textUpdate").text( vpName + " has fallen! Let the war continue, " + pName + "!" )
                    $("#choiceCont").html('<div id="mapB" class="menuButt"><p>Map</p></div>')
                    $("#villainFightPicture").fadeOut("slow")
                    $("#mapB").click(function () {
                        $(".menuFight").slideUp("normal");
                        $("#playerCont").html(pImage)
                        $("#textCont").slideDown("slow")
                        $("#textUpdate").text(pName + ", click on a MONSTER to engage them in battle.")
                        $("#choiceCont").html('')
                        $(vpLocation[0]).fadeOut("slow")
                   
                        vhp = ['ericHolder'];
                        vap = ['ericHolder'];
                        vcp = ['ericHolder'];
                        vpImage = ['ericHolder'];
                        vpName = ['ericHolder'];
                        vpLocation = ['ericHolder'];
                        pVampsKilld++
                        $("#printVampsKilld").text(pVampsKilld);
                    });
                }
                if (hp <= vcp) {
                    $("#heroFightUpdates").prepend('<br>' + pName + " Is DEAD!!");
                    $("#villainFightUpdates").prepend('<br>' + vpName + " Is VICTORIOUS!")
                    $("#textUpdate").text( vpName + " was truy too much." + pName + " Rest in peace, your world will live in terror." )
                    $("#choiceCont").html('<div id="gameOver" class="menuButt"><p>Reset</p></div>')
                    $("#gameOver").click(function () {
                        location.reload(true)

                    })
                }
            })

        })


        $("#abandonB").click(function () {
            $("#choiceCont").slideUp("fast");
            $("#textUpdate").text(pName + ", click on a MONSTER to engage them in battle.")
          
        });
    })

    $("#conContTwo").click(function () {
        $("#heroFightUpdates").empty()
        $("#villainFightUpdates").empty()
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
        $("#villainFightPicture").fadeIn("fast")
        $(".popup").slideDown("slow");
        $("#choiceCont").html('<div id="confirmB" class="menuButt"><p>Confirm?</p></div><div id="abandonB" class="menuButt"><p>Abandon?</p>')
        $("#textUpdate").text("Do you wish to fight " + vpName[0] + "?");
        $("#confirmB").click(function () {
            $(".menuFight").slideDown("normal");
            $("#choiceCont").html('<div id="fightB" class="menuButt"><p>Attack!</p></div>')
            $("#textUpdate").text("The battle BEGINS: " + pName + " VS " + vpName[0] + " In a fight to the DEATH!");
            $("#heroFightPicture").html(pImageAtt)
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
                    ap++
                    $("#heroFightUpdates").prepend('<br>' + pName + " Attacks!!");
                    $("#villainFightUpdates").prepend('<br>' + vpName + " Counters!")
                    $("#textUpdate").text( "Look at the speed of " + vpName + "! Can" + pName + " survive?" )
                    vhp = vhp - ap
                    hp = hp - vcp
                    $("#printvHP").text(vhp);
                    $("#printfHP").text(hp)
                }
                else if (vhp <= ap) {
                    $("#heroFightUpdates").prepend('<br>' + pName + " Is VICTORIOUS!!");
                    $("#villainFightUpdates").prepend('<br>' + vpName + " Is DEAD!")
                    $("#textUpdate").text( vpName + " Has been slain! " + pName + "! You have surely angered Vlad Dracula by killing his only begotten son!" )
                    $("#choiceCont").html('<div id="mapB" class="menuButt"><p>Map</p></div>')
                    $("#villainFightPicture").fadeOut("slow")
                    $("#mapB").click(function () {
                        $(".menuFight").slideUp("normal");
                        $("#playerCont").html(pImage)
                        $("#textCont").slideDown("slow")
                        $("#textUpdate").text(pName + ", click on a MONSTER to engage them in battle.")
                        $("#choiceCont").html('')
                        $(vpLocation[0]).fadeOut("slow")
                        
                        vhp = ['ericHolder'];
                        vap = ['ericHolder'];
                        vcp = ['ericHolder'];
                        vpImage = ['ericHolder'];
                        vpName = ['ericHolder'];
                        vpLocation = ['ericHolder'];
                        pVampsKilld++
                        $("#printVampsKilld").text(pVampsKilld);
                    });
                }
                if (hp <= vcp) {
                    $("#heroFightUpdates").prepend('<br>' + pName + " Is DEAD!!");
                    $("#villainFightUpdates").prepend('<br>' + vpName + " Is VICTORIOUS!")
                    $("#textUpdate").text( vpName + " has taken our hero. Where should we go now that " + pName + " is dead?")
                    $("#choiceCont").html('<div id="gameOver" class="menuButt"><p>Reset</p></div>')
                    $("#gameOver").click(function () {
                        location.reload(true)

                    })
                }
            })

        })


        $("#abandonB").click(function () {
            $("#choiceCont").slideUp("fast");
            $("#textUpdate").text(pName + ", click on a MONSTER to engage them in battle.")
          
        });
    })

    $("#conContThree").click(function () {
        $("#heroFightUpdates").empty()
        $("#villainFightUpdates").empty()
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
        $("#villainFightPicture").fadeIn("fast")
        $(".popup").slideDown("slow");
        $("#choiceCont").html('<div id="confirmB" class="menuButt"><p>Confirm?</p></div><div id="abandonB" class="menuButt"><p>Abandon?</p>')
        $("#textUpdate").text("Do you wish to fight " + vpName[0] + "?");
        $("#confirmB").click(function () {
            $(".menuFight").slideDown("normal");
            $("#choiceCont").html('<div id="fightB" class="menuButt"><p>Attack!</p></div>')
            $("#textUpdate").text("The battle BEGINS: " + pName + " VS " + vpName[0] + " In a fight to the DEATH!");
            $("#heroFightPicture").html(pImageAtt)
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
                    ap++
                    $("#heroFightUpdates").prepend('<br>' + pName + " Attacks!!");
                    $("#villainFightUpdates").prepend('<br>' + vpName + " Counters!")
                    $("#textUpdate").text(pName + " looks to be off to a strong start!")
                    
                    vhp = vhp - ap
                    hp = hp - vcp
                    $("#printvHP").text(vhp);
                    $("#printfHP").text(hp)
                }
                else if (vhp <= ap) {
                    $("#heroFightUpdates").prepend('<br>' + pName + " Is VICTORIOUS!!");
                    $("#villainFightUpdates").prepend('<br>' + vpName + " Is DEAD!")
                    $("#textUpdate").text(pName + ": Fool! Mardock desires not, your baren wasteland of a desicated viscera!")
                    $("#choiceCont").html('<div id="mapB" class="menuButt"><p>Map</p></div>')
                    $("#villainFightPicture").fadeOut("slow")
                    $("#mapB").click(function () {
                        $(".menuFight").slideUp("normal");
                        $("#playerCont").html(pImage)
                        $("#textCont").slideDown("slow")
                        $("#textUpdate").text(pName + ", click on a MONSTER to engage them in battle.")
                        $("#choiceCont").html('')
                        $(vpLocation[0]).fadeOut("slow")

                        vhp = ['ericHolder'];
                        vap = ['ericHolder'];
                        vcp = ['ericHolder'];
                        vpImage = ['ericHolder'];
                        vpName = ['ericHolder'];
                        vpLocation = ['ericHolder'];
                        pVampsKilld++
                        $("#printVampsKilld").text(pVampsKilld);
                    });
                }
                if (hp <= vcp) {
                    $("#heroFightUpdates").prepend('<br>' + pName + " Is DEAD!!");
                    $("#villainFightUpdates").prepend('<br>' + vpName + " Is VICTORIOUS!")
                    $("#textUpdate").text("Good things come to those who wait, and unto " + pName + ", a long deserved rest.")
                    $("#choiceCont").html('<div id="gameOver" class="menuButt"><p>Reset</p></div>')
                    $("#gameOver").click(function () {
                        location.reload(true)

                    })
                }
            })

        })


        $("#abandonB").click(function () {
            $("#choiceCont").slideUp("fast");
            $("#textUpdate").text(pName + ", click on a MONSTER to engage them in battle.")

        });
    })
    $("#conContFour").click(function () {
        $("#heroFightUpdates").empty()
        $("#villainFightUpdates").empty()
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
        $("#villainFightPicture").fadeIn("fast")
        $(".popup").slideDown("slow");
        $("#choiceCont").html('<div id="confirmB" class="menuButt"><p>Confirm?</p></div><div id="abandonB" class="menuButt"><p>Abandon?</p>')
        $("#textUpdate").text("Do you wish to fight " + vpName[0] + "?");
        $("#confirmB").click(function () {
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
                    ap++
                    $("#heroFightUpdates").prepend('<br>' + pName + " Attacks!!");
                    $("#villainFightUpdates").prepend('<br>' + vpName + " Counters!")
                    $("#textUpdate").text("Prepare for a close match!")
                    vhp = vhp - ap
                    hp = hp - vcp
                    $("#printvHP").text(vhp);
                    $("#printfHP").text(hp)
                }
                else if (vhp <= ap) {
                    $("#heroFightUpdates").prepend('<br>' + pName + " Is VICTORIOUS!!");
                    $("#villainFightUpdates").prepend('<br>' + vpName + " Is DEAD!")
                    $("#textUpdate").text("Mermandia: Merman, " + pName + ". I'm a merman!"  )
                    $("#choiceCont").html('<div id="mapB" class="menuButt"><p>Map</p></div>')
                    $("#villainFightPicture").fadeOut("slow")
                    $("#mapB").click(function () {
                        $(".menuFight").slideUp("normal");
                        $("#playerCont").html(pImage)
                        $("#textCont").slideDown("slow")
                        $("#textUpdate").text(pName + ", click on a MONSTER to engage them in battle.")
                        $("#choiceCont").html('')
                        $(vpLocation[0]).fadeOut("slow")
                        vhp = ['ericHolder'];
                        vap = ['ericHolder'];
                        vcp = ['ericHolder'];
                        vpImage = ['ericHolder'];
                        vpName = ['ericHolder'];
                        vpLocation = ['ericHolder'];
                        pVampsKilld++
                        $("#printVampsKilld").text(pVampsKilld);
                    });
                }
                if (hp <= vcp) {
                    $("#heroFightUpdates").prepend('<br>' + pName + " Is DEAD!!");
                    $("#villainFightUpdates").prepend('<br>' + vpName + " Is VICTORIOUS!")
                    $("#textUpdate").text("The saddest day." + pName + " is no more.")
                    $("#choiceCont").html('<div id="gameOver" class="menuButt"><p>Reset</p></div>')
                    $("#gameOver").click(function () {
                        location.reload(true)
                    
                    })
                }
            })

        })


        $("#abandonB").click(function () {
            $("#choiceCont").slideUp("fast");
            $("#textUpdate").text(pName + ", click on a MONSTER to engage them in battle.")
           
        });

    })

    $("#conContBoss").click(function () {
        if (pVampsKilld == 4) {
        $("#heroFightUpdates").empty()
        $("#villainFightUpdates").empty()
        vhp.shift()
        vap.shift()
        vcp.shift()
        vpImage.shift()
        vpName.shift()
        vpLocation.shift()
        vhp.push(dracula.hp)
        vap.push(dracula.ap)
        vcp.push(dracula.cp)
        vpImage.push(dracula.image)
        vpName.push(dracula.name)
        vpLocation.push(dracula.location)
        $("#villainFightPicture").fadeIn("fast")
        $(".popup").slideDown("slow");
        $("#choiceCont").html('<div id="confirmB" class="menuButt"><p>Confirm?</p></div><div id="abandonB" class="menuButt"><p>Abandon?</p>')
        $("#textUpdate").text("Do you wish to fight " + vpName[0] + "?");
        $("#confirmB").click(function () {
            $(".menuFight").slideDown("normal");
            $("#choiceCont").html('<div id="fightB" class="menuButt"><p>Attack!</p></div>')
            $("#textUpdate").text("The FINAL FIGHT!! " + pName + " VS " + vpName[0] + " Squaring off for the fate of the ENTIRE PLANET!!!");
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
                    ap++
                    $("#heroFightUpdates").prepend('<br>' + pName + " Attacks!!");
                    $("#villainFightUpdates").prepend('<br>' + vpName + " Counters!")
                    $("#textUpdate").text("IS THERE NO STOPPING VLAD DRACULA!?")
                    vhp = vhp - ap
                    hp = hp - vcp
                    $("#printvHP").text(vhp);
                    $("#printfHP").text(hp)
                }
                else if (vhp <= ap) {
                    $("#heroFightUpdates").prepend('<br>' + pName + " Is VICTORIOUS!!");
                    $("#villainFightUpdates").prepend('<br>' + vpName + " Is DEAD!")
                    $("#textUpdate").text(vpName + ":" +  pName + "!" + "THE AGE OF MAN WILL END--SOMEDAY! V@mPiRz 4 eva!")
                    $("#choiceCont").html('<div id="mapB" class="menuButt"><p>Map</p></div>')
                    $("#villainFightPicture").fadeOut("slow")
                    $("#mapB").click(function () {
                        $(".menuFight").slideUp("normal");
                        $("#playerCont").html(pImage)
                        $("#textCont").slideDown("slow")
                        $("#textUpdate").text(pName + ", click on a MONSTER to engage them in battle.")
                        $("#choiceCont").html('')
                        $(vpLocation[0]).fadeOut("slow")
                        vhp = ['ericHolder'];
                        vap = ['ericHolder'];
                        vcp = ['ericHolder'];
                        vpImage = ['ericHolder'];
                        vpName = ['ericHolder'];
                        vpLocation = ['ericHolder'];
                        pVampsKilld++
                        $("#printVampsKilld").text(pVampsKilld);
                    });
                }
                if (hp <= vcp) {
                    $("#heroFightUpdates").prepend('<br>' + pName + " Is DEAD!!");
                    $("#villainFightUpdates").prepend('<br>' + vpName + " Is VICTORIOUS!")
                    $("#textUpdate").text("FOREVER NIGHT!" + pName + " is banished TO HELL!!" + vpName + "LIVES FOREVER!" )
                    $("#choiceCont").html('<div id="gameOver" class="menuButt"><p>Reset</p></div>')
                    $("#gameOver").click(function () {
                        location.reload(true)
                    
                    })
                }
            })

        })


        $("#abandonB").click(function () {
            $("#choiceCont").slideUp("fast");
            $("#textUpdate").text(pName + ", click on a MONSTER to engage them in battle.")
           
        });
    }
    else {
        $("#textUpdate").text(pName + "! You must weaken Dracula first, by attacking his minions! Select another monster!")
           
    }
    })

}

