const darkButton = document.getElementById("dark-mode");

// Simpan warna awal untuk body dan header
const defaultBodyColor = window.getComputedStyle(document.body).backgroundColor;
const defaultHeaderColor = window.getComputedStyle(
  document.querySelector("header")
).backgroundColor;

let darkModeActive = false; // Untuk toggle

darkButton.addEventListener("click", function () {
  if (!darkModeActive) {
    // Ubah ke mode gelap
    document.body.style.backgroundColor = "#222831";
    document.querySelector("header").style.backgroundColor = "#31363F";
    darkModeActive = true;
  } else {
    // Kembalikan ke mode terang
    document.body.style.backgroundColor = defaultBodyColor;
    document.querySelector("header").style.backgroundColor = defaultHeaderColor;
    darkModeActive = false;
  }
});
