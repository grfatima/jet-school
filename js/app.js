const headLangBox = document.querySelector("#headLangBox");

const langs = ["AZ", "EN", "RU"];
let activeLang = langs[0];

let rightIcon = `<i class="fa-solid fa-arrow-right arrow"></i>`;
headLangBox.innerHTML = activeLang + rightIcon;
