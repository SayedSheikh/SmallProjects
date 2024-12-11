function openTab(event, city) {
  let tabs = document.querySelectorAll(".tabs");
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });
  let tabInfos = document.querySelectorAll(".tabinfo");
  tabInfos.forEach((tabInfo) => {
    tabInfo.style.display = "none";
  });
  let selectedCity = document.querySelector(`#${city}`);
  selectedCity.style.display = "block";

  event.currentTarget.classList.add("active");
}
