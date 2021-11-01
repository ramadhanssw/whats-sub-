const ModeWarna = document.getElementById("ModeWarna");
ModeWarna.onclick = function() {
	document.body.classList.toggle("darkmode");
} 

const FormKritik = document.getElementById("formkritik");
FormKritik.onclick = function() {
	alert("Terima kasih atas masukannya");
} 

const FormKritikBaru = document.forms["form"];
FormKritikBaru.addEventListener('submit', function(e){
  e.preventDefault();
  const PrintKritik = FormKritikBaru.querySelector("textarea").value;
  console.log("Komentar: " + PrintKritik);
  document.getElementById("form").reset();
});

const MobileNavbar = document.querySelector("nav .menu-bar");
const TombolMenu = document.querySelector(".toggle-menu input");

TombolMenu.addEventListener("click", function(){
	MobileNavbar.classList.toggle("slide");
})