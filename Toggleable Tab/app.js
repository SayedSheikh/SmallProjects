function openCity(event, city) {
  let tabcontents = document.querySelectorAll(".tabcontent");
  let btn = document.querySelectorAll(".tabs");
  //remove all displays
  for (let i = 0; i < tabcontents.length; i++) {
    tabcontents[i].style.display = "none";
  }

  //remove all active class
  for (let i = 0; i < btn.length; i++) {
    // btn[i].className = btn[i].className.replace(" active", "");
    btn[i].classList.remove("active");
  }

  document.querySelector(`#${city}`).style.display = "block";
  event.currentTarget.classList.add("active");
  //   event.currentTarget.className += " active";
}
