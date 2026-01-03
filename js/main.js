let currentLang = localStorage.getItem('lang') || 'ru';

// Подгружаем переводы
Promise.all([
  fetch('locales/ru.json').then(res => res.json()),
  fetch('locales/en.json').then(res => res.json())
]).then(([ru, en]) => {
  i18next.init({
    lng: currentLang,
    fallbackLng: 'ru',
    resources: {
      ru: { translation: ru },
      en: { translation: en }
    }
  }, updateContent);

  updateLangUI();
});

// Кнопка языка
const langToggle = document.getElementById('langToggle');

// Обновление текста на странице
function updateContent() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = i18next.t(el.dataset.i18n);
  });
}

// Обновление видимого языка на кнопке
function updateLangUI() {
  langToggle.querySelector('.ru').classList.toggle('none', currentLang !== 'ru');
  langToggle.querySelector('.en').classList.toggle('none', currentLang !== 'en');
}

// Переключение языка
function toggleLang() {
  currentLang = currentLang === 'ru' ? 'en' : 'ru';
  i18next.changeLanguage(currentLang, updateContent);
  updateLangUI();
  localStorage.setItem('lang', currentLang);
}

// Только click — работает на всех устройствах
langToggle.addEventListener('click', toggleLang);

// Инициализация UI
updateLangUI();