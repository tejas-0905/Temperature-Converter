const cel = document.getElementById("cel");
const fah = document.getElementById("fah");
const kel = document.getElementById("kel");
cel.addEventListener("input", () => {
let c = parseFloat(cel.value);
fah.value = (c * 9/5 + 32).toFixed(2);
kel.value = (c + 273.15).toFixed(2);
});
fah.addEventListener("input", () => {
let f = parseFloat(fah.value);
cel.value = ((f - 32) * 5/9).toFixed(2);
kel.value = ((f - 32) * 5/9 + 273.15).toFixed(2);
});
kel.addEventListener("input", () => {
let k = parseFloat(kel.value);
cel.value = (k - 273.15).toFixed(2);
  fah.value = ((k - 273.15) * 9/5 + 32).toFixed(2);
});
const modeToggle = document.getElementById("modeToggle");
const body = document.body;
modeToggle.addEventListener("change", () => {
 body.classList.toggle("dark");
});
const container = document.getElementById("container");
document.addEventListener("mousemove", (e) => {
const x = (window.innerWidth / 2 - e.pageX) / 25;
const y = (window.innerHeight / 2 - e.pageY) / 25;
