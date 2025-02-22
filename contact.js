function toggleMenu() {
    const hamburger = document.querySelector(".menu-icon");
    const menu = document.getElementById("menu");
    const navbar = document.querySelector(".navbar");
    const content = document.querySelectorAll(".hero, .box2, .box3, .box4, .box5, .box6, .insta, .footer, .box7"); 

    
    hamburger.classList.toggle("active");
        
    if (menu.classList.contains("show")) {
        menu.classList.remove("show");  
        document.body.classList.remove("no-scroll"); 

       
        content.forEach(element => {
            element.style.display = "block";
        });

    } else {
        menu.classList.add("show");  
        document.body.classList.add("no-scroll"); 

       
        content.forEach(element => {
            element.style.display = "none";
        });
        navbar.style.display = "flex"; 
    }
}


// ccfccbcd/
// ccfccbcd/



    document.addEventListener("DOMContentLoaded", function () {
        let links = document.querySelectorAll(".menu ul li a");
        let currentURL = window.location.pathname.split("/").pop(); 

        links.forEach(link => {
            if (link.getAttribute("href") === currentURL) {
                link.classList.add("active"); 
            }
        });
    });




// gchghjhcgxh
// hcvjhjj,jkb

document.getElementById("sendButton").addEventListener("click", function(event) {
    event.preventDefault(); 

let isValid = true;

let errorMessages = [];
let errorContainer = document.getElementById("errorContainer");
errorContainer.innerHTML = "";

let firstName = document.getElementById("first_name");
let lastName = document.getElementById("last_name");
let email = document.getElementById("email");
let message = document.getElementById("message");

let firstNameError = document.getElementById("firstNameError");
let lastNameError = document.getElementById("lastNameError");
let emailError = document.getElementById("emailError");
let messageError = document.getElementById("messageError");

firstNameError.textContent = "";
lastNameError.textContent = "";
emailError.textContent = "";
messageError.textContent = "";



let missingFields = [];   





setTimeout(() => {
if (firstName.value.trim() === "" || lastName.value.trim() === "") {
firstNameError.innerHTML = `<span class="warning-icon">!</span> Name is required.`;
missingFields.push("Name");
errorMessages.push("Name is required.");
firstNameError.style.display = "flex";  
isValid = false;
} 

else {
firstNameError.style.display = "none"; 
}
}, 1500);


setTimeout(() => {
if (email.value.trim() === "") {
emailError.innerHTML = `<span class="warning-icon">!</span> Email is required.`;
missingFields.push("Email");
errorMessages.push("Email is required.");
emailError.style.display = "flex"; 
isValid = false;
} else {
emailError.style.display = "none";
}
}, 1500); 


setTimeout(() => {
if (message.value.trim() === "") {
messageError.innerHTML = `<span class="warning-icon">!</span> Message is required.`;
missingFields.push("Message");
errorMessages.push("Message is required.");
messageError.style.display = "flex"; 
isValid = false;
} else {
messageError.style.display = "none";
}
}, 1500); 




setTimeout(() => {
   
    if (missingFields.length > 0) {
        errorContainer.innerHTML = `<div class="errorContainer">
                                    <span class="warning-icon">!</span> Form submission failed. Review the following fields.
                                    <strong>${missingFields.join(",")}</strong>.
                                </div>`;
        errorContainer.style.display = "flex"; 
    } else {
        errorContainer.style.display = "none";  
    }
}, 1500); 

   




let button = document.getElementById("sendButton");
button.classList.add("loading");

setTimeout(() => {
    button.classList.remove("loading");
    
    if (!isValid) {
        button.classList.add("shake");
        setTimeout(() => button.classList.remove("shake"), 600);
    } else {
        document.getElementById("registration").innerHTML = "<h2>Thank You!</h2>";
    }
}, 1500);
});
