const buttons = document.querySelectorAll('[data-lang]');
const copies = document.querySelectorAll('[data-copy]');

function setLanguage(lang) {
  document.documentElement.lang = lang;
  copies.forEach((element) => { element.hidden = element.dataset.copy !== lang; });
  buttons.forEach((button) => { button.setAttribute('aria-pressed', String(button.dataset.lang === lang)); });
  localStorage.setItem('mhstudio-language', lang);
}

buttons.forEach((button) => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
document.querySelectorAll('[data-coming-soon]').forEach((button) => button.addEventListener('click', () => alert(document.documentElement.lang === 'ko' ? '준비 중입니다.' : 'Coming soon.')));
setLanguage(localStorage.getItem('mhstudio-language') || (navigator.language.startsWith('ko') ? 'ko' : 'en'));
