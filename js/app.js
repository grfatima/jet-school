const activeLangBox = document.querySelector("#headLangBox");
const deActiveLangBox = document.querySelector("#deActiveLang");

const langs = ["AZ", "EN", "RU"];
let activeLang = langs[0];
let deActiveLangs = langs.filter((l) => l !== activeLang);

let rightArrow = `<i class="fa-solid fa-arrow-right arrow"></i>`;
let downArrow = `<i class="fa-solid fa-arrow-down"></i>`;

activeLangBox.innerHTML = activeLang + rightArrow;
deActiveLangs.forEach((lang) => {
  deActiveLangBox.innerHTML += `<li>${lang}</li>`;
});

activeLangBox.onclick = () => {
  deActiveLangBox.classList.toggle("show");
};
