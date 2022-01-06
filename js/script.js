// what we do section
$(document).ready(function(){
    $("#hide1").click(function(){
        $("#hide1").toggle();
            $("#show1").toggle();
                $("#show1").click(function(){
                    $("#show1").hide();
                    $("#hide1").show();
                });
    });
});
$(document).ready(function(){
    $("#hide2").click(function(){
        $("#hide2").toggle();
            $("#show2").toggle();
                $("#show2").click(function(){
                    $("show2").hide();
                    $("hide").show();
                });
    });
});
$(document).ready(function(){
    $("#hide3").click(function(){
        $("#hide3").toggle();
            $("#show3").toggle();
                $("#show3").click(function(){
                    $("#show3").hide();
                    $("#hide3").show();
                });
    });
});


// hover
$(document).ready(function(){
    $("#work2").mouseover(function(){
        $("#overlay2").show();
    });
    $("#work2").mouseout(function(){
        $("#overlay2").hide();
    });
});

$(document).ready(function(){
    $("#work3").mouseover(function(){
        $("#overlay3").show();
    });
    $("#work3").mouseout(function(){
        $("#overlay3").hide();
    });
});

$(document).ready(function(){
    $("work4").mouseover(function(){
        $("#overlay4").show();
    });
    $("#work4").mouseout(function(){
        $("#overlay4").hide();
    });
});

$(document).ready(function(){
    $("#work5").mouseover(function(){
        $("#overlay5").show();
    });
    $("#work5").mousout(function(){
        $("#overlay5").show();
    });
});

$(document).ready(function(){
    $("#work6").mouseover(function(){
        $("#overlay6").show();
    });
    $("#work6").mousout(function(){
        $("#overlay6").show();
    });
});

$(document).ready(function(){
    $("#work7").mouseover(function(){
        $("#overlay7").show();
    });
    $("#work6").mousout(function(){
        $("#overlay7").show();
    });
});

$(document).ready(function(){
    $("#work8").mouseover(function(){
        $("#overlay8").show();
    });
    $("#work8").mousout(function(){
        $("#overlay8").show();
    });
});


    $("form#formValidity").submit(function(event){
        var name =$("input").val();
        var email = $("input").val();
        var message = $ ("comment").val ();
        if (name && email){
            alert(name+", we have received your message. Thank you for reaching out to us.");
        }
        else{
            alert ("Please input your name and email!");
        }
    })


    var input = document.getElementById('message')
    input.addEventListener('keyup', function(event){
        if (event.code === 'Enter') {
            event.preventDefault();
            document.querySelector('form').submit ();
        }
    })