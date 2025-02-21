function toggleMenu() {
    const hamburger = document.querySelector(".menu-icon");
    const menu = document.getElementById("menu");
    const navbar = document.querySelector(".navbar");
    const content = document.querySelectorAll(".hero, .box2, .box3, .box4, .box5, .box6, .footer, .box7");

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

// ccfccbcd/
// ccfccbcd/

