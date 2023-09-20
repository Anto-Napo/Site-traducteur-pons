import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="title-container">
    <p id="title" class="title">
      PONRAPS
    </p>
  </div>

  <div class="select-languages-container">
    <select class="menu-that-to-this" id="menu-that-to-this1">
      <option value="français"> Français </option>
      <option value="anglais"> Anglais </option>
      <option value="allemand"> Allemand </option>
      <option value="espagnol"> Espagnol </option>
      <option value="" selected> Select a language </option>
    </select>

    <img src="/arrow.png" class="arrow-that-to-this">

    <select class="menu-that-to-this" id ="menu-that-to-this2">
      <option value="français"> Français </option>
      <option value="anglais"> Anglais </option>
      <option value="allemand"> Allemand </option>
      <option value="espagnol"> Espagnol </option>
      <option value="" selected> Select a language </option>
    </select>
  </div>

  <div class="word-to-convert-container">
    <input id="word-input" class="word-to-convert-input" placeholder="Mot à convertir">
  </div>

  <div class="done-container">
    <button id="convert" class="done-button">Convertir</button>
  </div>
`
function goToTop() {
  window.scrollTo(0, 0);
}

function convert() {
  if (firstLanguageElement.value === '') {
    alert('Please select a language');
    return;
  } else if (secondLanguageElement.value === '') {
    alert('Please select a language');
    return;
  } else if (firstLanguageElement.value === secondLanguageElement.value) {
    alert('Please do not select the same language');
    return;
  }
  const firstLanguage = firstLanguageElement.value;
  localStorage.setItem('firstLanguageValue', firstLanguage);
  const secondLanguage = secondLanguageElement.value;
  localStorage.setItem('secondLanguageValue', secondLanguage);
  const wordInput = wordInputElement.value.toLowerCase();
  console.log(window.location.href = `https://fr.pons.com/traduction/${firstLanguage}-${secondLanguage}/${wordInput}`);
}

document.querySelector('#title').addEventListener('click', goToTop);
document.querySelector('#convert').addEventListener('click', convert);
const firstLanguageElement = document.querySelector('#menu-that-to-this1');
const secondLanguageElement = document.querySelector('#menu-that-to-this2');
const wordInputElement = document.querySelector('#word-input');

// Get languages

let firstLanguageValue = localStorage.getItem('firstLanguageValue');
let secondLanguageValue = localStorage.getItem('secondLanguageValue');

if (firstLanguageValue === null) {
  firstLanguageValue = '';
}
if (secondLanguageValue === null) {
  secondLanguageValue = '';
}

firstLanguageElement.value = firstLanguageValue;
secondLanguageElement.value = secondLanguageValue;