function toggleMenu() {
  document.getElementById("sidebar").classList.toggle("active");
}

// search basic (dummy dulu)
document.querySelector(".search-box").addEventListener("keyup", function(e) {
  if (e.key === "Enter") {
    alert("Lu nyari: " + this.value + " (fitur belum jadi ya sabar)");
  }
});