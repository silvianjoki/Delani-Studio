

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