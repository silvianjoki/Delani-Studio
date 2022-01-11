
// button submit
var form = document.getElementById('mc-embedded-subscribe-form')
form.addEventListener('submit',function(event){
    event.preventDefault() //prevent form from autosubmit
    var name= document.getElementById('name').value;
    console.log(name)
    var email= document.getElementById('email').value;
    console.log(email)
    var message= document.getElementById('message').value;
    console.log(message)

    if(name == '' ||email== '' ||message=='') {
        Swal.fire('please fill in missing information');
    }else(
        Swal.fire('Hello, we have received your message. Thank you for reaching out to us.')
    )
    });
