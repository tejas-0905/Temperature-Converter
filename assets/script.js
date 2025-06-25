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
