function toggleMenu() {
  document.getElementById("sidebar").classList.toggle("active");
}

function toggleSearch() {
  let box = document.getElementById("searchBox");
  box.style.display = (box.style.display === "block") ? "none" : "block";
}

function readManga() {
  alert("Baca manga nya nanti sini ya 🗿");
}