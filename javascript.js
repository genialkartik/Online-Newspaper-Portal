/*------- to make navigation bar sticky on scrolling */
window.onscroll = function() {myFunction()};
var navbar = document.getElementById("topicmenu");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    
  } else {
    navbar.classList.remove("sticky");
  }
}



function openNav() {
    document.getElementById("mySidenav").style.width = "25%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}



