    var input = document.getElementById('message')
    input.addEventListener('keyup', function(event){
        if (event.code === 'Enter') {
            event.preventDefault();
            document.querySelector('form').submit ();
        }
    })
    