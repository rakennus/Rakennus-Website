window.onscroll = function() {myFunction()};

var headline = document.getElementById("Navigations");
var Nav1 = document.getElementById("TextNav3DPrinting");

var sticky = headline.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    headline.classList.add("sticky")
    Nav1.classList.add("sticky")
  } else {
    headline.classList.remove("sticky");
    Nav1.classList.remove("sticky");
  }
} 