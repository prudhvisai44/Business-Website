// JavaScript Connected

console.log("JavaScript Connected");

// Contact Form Validation

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");

    if(form){

        form.addEventListener("submit", function(event){

            event.preventDefault();

            let name = document.getElementById("name").value.trim();

            let email = document.getElementById("email").value.trim();

            let message = document.getElementById("message").value.trim();

            if(name===""){

                alert("Please enter your name");

                return;

            }

            if(!email.includes("@")){

                alert("Please enter a valid email");

                return;

            }

            if(message.length<10){

                alert("Message should contain at least 10 characters");

                return;

            }

            alert("Message Sent Successfully!");

            form.reset();

        });

    }

});
// Dark Mode

function toggleDarkMode(){

    document.body.classList.toggle("dark-mode");

    localStorage.setItem(
        "theme",
        document.body.classList.contains("dark-mode")
    );

}

if(localStorage.getItem("theme")==="true"){

    document.body.classList.add("dark-mode");

}
// Scroll Button

window.onscroll = function(){

    let btn = document.getElementById("topBtn");

    if(btn){

        if(document.documentElement.scrollTop > 200){

            btn.style.display="block";

        }

        else{

            btn.style.display="none";

        }

    }

}

function scrollToTop(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}
