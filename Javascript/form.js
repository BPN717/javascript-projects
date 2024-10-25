var form = document.getElementById("form");
var email = document.getElementById("email");
var phone = document.getElementById("phone");
var url = document.getElementById("url");
var username = document.getElementById("username");
var email_message = document.getElementById("email_error");
var phone_message = document.getElementById("phone_error");
var url_message = document.getElementById("url_error");
var username_message = document.getElementById("username_error");


email.onkeydown = function(){
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(pattern.test(email.value)){
        
       email_message.classList.add("hidden");
       email_message.classList.remove("error");
    }else{
        email_message.classList.add("error");
        email_message.classList.remove("hidden");
    }
}


phone.onkeydown = function(){
    var pattern = /^\d{9}$/;

    if(pattern.test(phone.value)){
        
        phone_message.classList.add("hidden");
        phone_message.classList.remove("error");
        
    }else{
        phone_message.classList.add("error");
        phone_message.classList.remove("hidden");
    }
}



url.onkeydown = function(){
    var pattern = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

    if(pattern.test(url.value)){
        
        url_message.classList.add("hidden");
        url_message.classList.remove("error");
    }else{
        url_message.classList.add("error");
        url_message.classList.remove("hidden");
    }
}


username.onkeydown = function(){
    var pattern = /^[a-zA-Z0-9]+$/;

    if(pattern.test(username.value) || username.value !== ""){

        username_message.innerHTML="Good";
        username_message.classList.add("valide");
        username_message.classList.remove("error");
        username_message.classList.remove("hidden");
    }else{
        username_message.innerHTML="Enter a valid username";
        username_message.classList.remove("valide");
        username_message.classList.add("error");
    }
}



