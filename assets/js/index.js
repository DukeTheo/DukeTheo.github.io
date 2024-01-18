const preLoader = document.querySelector("#pre-loader");

window.addEventListener("load", () => {
  window.setTimeout(() => {
    preLoader.style.display = "none";
  }, 4000)
})