// DOM
// document.getElementById("main-title").innerHTML = "Hello!";
// document.getElementById("example-span").innerText;
// document.querySelector("#example-span").textContent = "Goodbye";

// const divs = document.querySelectorAll("div");

// divs.forEach((d, i) => {
//   d.textContent = `Index ${i}`;
// });

// document.getElementById("new-button").addEventListener("click", (e) => {
//   e.target.textContent = "Hi!";
// });

const uptadeNewButtonText = (val) => {
  document.getElementById("new-button").textContent = val;
};

// Handle browser/node differences
if (typeof exports != "undefined") {
  module.exports = {
    uptadeNewButtonText,
  };
}
