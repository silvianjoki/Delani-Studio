// what we do area
$(document).ready(function() {
$(".hide1").click(function() {
    $(".hide1").slideToggle(5000);
    $(".show1").slideToggle(8000);
});
$(".click1").click(function() {
    $(".hide2").slideToggle(5000);
    $(".show2").slideToggle(8000);
});
$(".click3").click(function() {
    $(".hide3").slideToggle(5000);
    $(".show3").slideToggle(7000);
});
});


// portfolio text overlay
$(document).ready(function(){
    $("#work1").mouseover(function(){
        $("#overlay").show();
    }).mouseout(function(){
        $("#overlay").hide();
    });

    $("#work2").mouseover(function(){
        $("#overlay2").show();
    }).mouseout(function() {
        $("#overlay2").hide();
    });

    $("#work3").mouseover(function(){
        $("#overlay3").show();
    }).mouseout(function(){
        $("#overlay3").hide();
    });

    $("#work4").mouseover(function(){
        $("#overlay4").show();
    }).mouseout(function(){
        $("#overlay4").hide();
    })

    $("work5").mouseover(function(){
        $("#overlay5").show();
    }).mouseout(function(){
        $("#overlay5").hide();
    })

    $("#work6").mouseover(function(){
        $("#overlay6").show();
    }).mouseout(function(){
        $("#overlay6").hide();
    })

    $("#work7").mouseover(function(){
        $("#overlay7").show();
    }).mouseout(function(){
        $("#overlay7").hide();
    })

    $("work8").mouseover(function(){
        $("#overlay8").show();
    }).mouseout(function(){
        $("#overlay8").hide();
    })
});