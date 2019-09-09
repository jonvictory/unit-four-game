window.onload = function () {
    
}

$(".startScreen").click(function(){
    $(".startScreen").fadeOut("slow");
    $(".charSelect").fadeIn("slow");
})

$(".charOne").click(function(){
    $("#charSelOne").fadeIn("slow");
    $(".charSelect").fadeIn("slow");
    
})

$(".charTwo").click(function(){
    $("#charSelTwo").fadeIn("slow");
    $(".charSelect").fadeIn("slow");
})

$(".charThree").click(function(){
    $("#charSelThree").fadeIn("slow");
    $(".charSelect").fadeIn("slow");
})

$(".charSelected").click(function(){
    $(".charSelect").fadeOut("slow");
    $(".charSelected").fadeOut("slow");
    $(".bg").fadeIn("slow");
})