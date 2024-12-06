let accs = document.querySelectorAll(".accordion");
console.dir(accs);
let panel2 = document.querySelector(".panel");
console.log(panel2.style.maxHeight);

accs.forEach((acc) => {
  acc.addEventListener("click", () => {
    console.log("clicked");
    acc.classList.toggle("active");

    let panel = acc.nextElementSibling;
    console.dir(panel);

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.style.padding = "0 10px";
    } else {
      panel.style.maxHeight = `${panel.scrollHeight}px`;
      panel.style.padding = "15px 10px";
    }
  });
});
