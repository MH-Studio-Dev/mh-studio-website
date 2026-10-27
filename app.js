const buttons = document.querySelectorAll('[data-lang]');
const copies = document.querySelectorAll('[data-copy]');

function setLanguage(lang) {
  document.documentElement.lang = lang;
  copies.forEach((element) => { element.hidden = element.dataset.copy !== lang; });
  buttons.forEach((button) => { button.setAttribute('aria-pressed', String(button.dataset.lang === lang)); });
  localStorage.setItem('mhstudio-language', lang);
}

buttons.forEach((button) => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
setLanguage(localStorage.getItem('mhstudio-language') || (navigator.language.startsWith('ko') ? 'ko' : 'en'));
