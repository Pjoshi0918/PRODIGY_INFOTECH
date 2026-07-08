// ================================
// Sticky Navbar
// ================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 50);
});

// ================================
// Active Navigation
// ================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ================================
// Typing Effect
// ================================

const textArray = [
    "Web Developer",
    "Frontend Developer",
    "Programmer",
    "C++ Enthusiast",
    "Problem Solver"
];

let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

const typingElement = document.querySelector(".home-content h3:last-of-type");

function type() {

    if (!typingElement) return;

    if (!isDeleting) {

        currentText = textArray[index].substring(0, charIndex++);
        typingElement.textContent = currentText;

        if (charIndex > textArray[index].length) {

            isDeleting = true;

            setTimeout(type, 1200);

            return;

        }

    } else {

        currentText = textArray[index].substring(0, charIndex--);
        typingElement.textContent = currentText;

        if (charIndex < 0) {

            isDeleting = false;

            index++;

            if (index >= textArray.length)
                index = 0;

        }

    }

    setTimeout(type, isDeleting ? 60 : 120);

}

type();


// ================================
// Scroll To Top Button
// ================================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.cssText = `
position:fixed;
right:20px;
bottom:20px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:#00d4ff;
color:#081b29;
font-size:24px;
cursor:pointer;
display:none;
box-shadow:0 0 20px cyan;
transition:.3s;
z-index:999;
`;

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topBtn.style.display="block";

    }
    else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};


// ================================
// Contact Form Validation
// ================================

const form=document.querySelector("form");

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    const name=form.querySelector("input[type=text]").value.trim();

    const email=form.querySelector("input[type=email]").value.trim();

    const message=form.querySelector("textarea").value.trim();

    if(name==="" || email==="" || message===""){

        alert("Please fill all the fields.");

        return;

    }

    if(!email.includes("@")){

        alert("Please enter a valid email.");

        return;

    }

    alert("Message Sent Successfully!");

    form.reset();

});


// ================================
// Fade In Animation
// ================================

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{threshold:0.2});

const hiddenElements=document.querySelectorAll(".skill-box,.project-card,.about-content");

hiddenElements.forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(50px)";

el.style.transition="all .8s ease";

observer.observe(el);

});


// ================================
// Social Icons Hover Effect
// ================================

document.querySelectorAll(".social-icons a").forEach(icon=>{

icon.addEventListener("mouseenter",()=>{

icon.style.transform="scale(1.2) rotate(360deg)";

});

icon.addEventListener("mouseleave",()=>{

icon.style.transform="scale(1)";

});

});


// ================================
// Welcome Message
// ================================

window.onload=()=>{

setTimeout(()=>{

console.log("Welcome to Pushkar's Portfolio 🚀");

},1000);

};