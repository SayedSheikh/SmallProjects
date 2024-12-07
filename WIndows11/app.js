let btn = document.querySelector(".icon");
let slide = document.querySelector(".slide");

btn.addEventListener("click", () => {
  console.log("clicked");
  if (!slide.style.bottom) {
    slide.style.bottom = "52px";
  } else {
    slide.style.bottom = null;
  }
});
