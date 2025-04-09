const activeLangBox = document.querySelector("#headLangBox");
const deActiveLangBox = document.querySelector("#deActiveLang");

const langs = ["AZ", "EN", "RU"];
let activeLang = langs[0];
let deActiveLangs = langs.filter((l) => l !== activeLang);

const showLangs = () => {
  let rightArrow = `<i class="fa-solid fa-arrow-right arrow"></i>`;
  let downArrow = `<i class="fa-solid fa-arrow-down"></i>`;

  activeLangBox.innerHTML = activeLang + rightArrow;
  deActiveLangs.forEach((lang) => {
    deActiveLangBox.innerHTML += `<li onclick = setActiveLang('${lang}')>${lang}</li>`;
  });
};
showLangs();

activeLangBox.onclick = () => {
  deActiveLangBox.classList.toggle("show");
};

function setActiveLang(lang) {
  deActiveLangBox.innerText = "";
  activeLang = lang;
  deActiveLangs = langs.filter((l) => l !== activeLang);
  showLangs();
}
