const menuBtn = document.querySelector('.menu-btn');
const links = document.querySelector('.links');
let menuOpen = false;
var navColorCyan = false;

menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
    document.getElementById("navcontent").style.transform = "scale(60)";
    setTimeout(showlinks, 400);
    document.getElementById("navcontent").style.backgroundColor = "rgb(230, 230, 230)";
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
    setTimeout(hidelinks, 300);
    document.getElementById("navcontent").style.transform = "scale(1.4)";
    document.getElementById("navcontent").style.backgroundColor = "white";
  } 
});

links.addEventListener("mouseover", function (event) {
  document.getElementById("navcontent").style.backgroundColor = "rgb(230, 230, 230)";
})

menuBtn.addEventListener("mouseover", function (event) {
  document.getElementById("navcontent").style.boxShadow = "0px 0px 50px black";
  document.getElementById("navcontent").style.backgroundColor = "rgb(230, 230, 230)";
})

menuBtn.addEventListener("mouseout", function (event) {
  if(!menuOpen){
    document.getElementById("navcontent").style.boxShadow = "none";
    document.getElementById("navcontent").style.backgroundColor = "rgba(0, 0, 0, 0)";
  }
})

function showlinks() {
  document.getElementById("links").style.display = "block";
}

function hidelinks() {
  document.getElementById("links").style.display = "none";
}