// DOM
// document.getElementById("main-title").innerHTML = "Hello!";
// document.getElementById("example-span").innerText;
document.querySelector("#example-span").textContent = "Goodbye";

const divs = document.querySelectorAll("div");

divs.forEach((d, i) => {
  d.textContent = `Index ${i}`;
});
