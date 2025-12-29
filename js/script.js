//Typed animation

var typed = new Typed("#typed",{
    strings: ["Full-Stack Web Developer","PHP Developer", "Laravel Developer"],
    typeSpeed: 70,
    backSpeed: 20,
    backDelay: 3000,
    showCursor: false,
    loop: true
})


//Theme

function theme(){
    const darkBtn = document.getElementById('darkBtn')
    const lightBtn = document.getElementById('lightBtn')

    document.body.classList.toggle('light');
    
    if(document.body.classList.contains('light')){
        darkBtn.style.display = 'block';
        lightBtn.style.display = 'none';
    } else{
        darkBtn.style.display = 'none';
        lightBtn.style.display =  'block';
    }
}


const profile = document.querySelector('.profile');

window.addEventListener('scroll', () => {
  if (window.scrollY > 520) {
    profile.classList.add('hidden');
  } else {
    profile.classList.remove('hidden');
  }
});



// Получаем текущий язык из localStorage или по умолчанию RU
let currentLang = localStorage.getItem('lang') || 'ru';

// Подгружаем переводы
Promise.all([
  fetch('/locales/ru.json').then(res => res.json()),
  fetch('/locales/en.json').then(res => res.json())
]).then(([ru, en]) => {

  i18next.init({
    lng: currentLang,
    fallbackLng: 'ru',
    resources: {
      ru: { translation: ru },
      en: { translation: en }
    }
  }, updateContent);

  // Инициализация UI кнопки после загрузки переводов
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

// Переключение видимого языка на кнопке
function updateLangUI() {
  const ruSpan = langToggle.querySelector('.ru');
  const enSpan = langToggle.querySelector('.en');
  ruSpan.classList.toggle('none', currentLang !== 'ru');
  enSpan.classList.toggle('none', currentLang !== 'en');
}

// Функция переключения языка
function toggleLang() {
  currentLang = currentLang === 'ru' ? 'en' : 'ru';
  i18next.changeLanguage(currentLang, updateContent);
  updateLangUI();
  localStorage.setItem('lang', currentLang);
}

// Обработка клика и тача для мобильных
langToggle.addEventListener('click', toggleLang);
langToggle.addEventListener('touchstart', (e) => {
  e.preventDefault(); // предотвращает выделение текста
  toggleLang();
});
