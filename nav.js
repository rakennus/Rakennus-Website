const menuBtn = document.querySelector('.menu-btn');
const links = document.querySelector('.links');
let menuOpen = false;
var navColorCyan = false;

menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
    document.getElementById("navcontent").style.scale = "50";
    setTimeout(showlinks, 100);
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
    document.getElementById("links").style.display = "none";
    document.getElementById("navcontent").style.scale = "1.5";
  } 
});

links.addEventListener("mouseover", function (event) {
  document.getElementById("navcontent").style.backgroundColor = "cyan";
})

menuBtn.addEventListener("mouseover", function (event) {
  document.getElementById("navcontent").style.backgroundColor = "cyan";
})

menuBtn.addEventListener("mouseout", function (event) {
  document.getElementById("navcontent").style.backgroundColor = "white";
})

function showlinks() {
  document.getElementById("links").style.display = "block";
}