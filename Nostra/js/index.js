//To close the offer bar
var offerBar = document.getElementById("offer-bar");
var closeOffer = document.getElementById("offer-close");

closeOffer.addEventListener("click", function (){
    offerBar.style.display = "none";
})

//Selecting Side Navbar, MenuIcon
var sidenav = document.getElementById("sidenav");
var menuicon = document.getElementById("menuicon");
var closenav = document.getElementById("close-nav");

menuicon.addEventListener("click", function (){
    sidenav.style.left = 0;
})

closenav.addEventListener("click", function (){
    sidenav.style.left = "-50%";
})

//Most wanted
var likeicon1 = document.getElementById("likeicon1");
likeicon1.addEventListener("click", function (){

    if (likeicon1.getAttribute("stroke") === "red") {
        likeicon1.setAttribute("stroke", "white");
        likeicon1.setAttribute("fill", "none");
    } else {
        likeicon1.setAttribute("fill", "red");
        likeicon1.setAttribute("stroke", "red");
    }
})



var likeicon2 = document.getElementById("likeicon2");
likeicon2.addEventListener("click", function (){

    if (likeicon2.getAttribute("stroke") === "red") {
        likeicon2.setAttribute("stroke", "white");
        likeicon2.setAttribute("fill", "none");
    } else {
        likeicon2.setAttribute("fill", "red");
        likeicon2.setAttribute("stroke", "red");
    }
})

var likeicon3 = document.getElementById("likeicon3");
likeicon3.addEventListener("click", function (){

    if (likeicon3.getAttribute("stroke") === "red") {
        likeicon3.setAttribute("stroke", "white");
        likeicon3.setAttribute("fill", "none");
    } else {
        likeicon3.setAttribute("fill", "red");
        likeicon3.setAttribute("stroke", "red");
    }
})

var likeicon4 = document.getElementById("likeicon4");
likeicon4.addEventListener("click", function (){

    if (likeicon4.getAttribute("stroke") === "red") {
        likeicon4.setAttribute("stroke", "white");
        likeicon4.setAttribute("fill", "none");
    } else {
        likeicon4.setAttribute("fill", "red");
        likeicon4.setAttribute("stroke", "red");
    }
})