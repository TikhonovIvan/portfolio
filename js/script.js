//Typed animation

var typed = new Typed("#typed",{
    strings: ["Full-Stack Web Developer","PHP Developer", " Developer"],
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



// Смена картинки каждые 3 сек

const images = [
  './img/cover-1.jpg',
  './img/cover-2.jpg',
  './img/cover-3.jpg',
];

let index = 0;
const slider = document.getElementById('slider');

// 🔹 Предзагрузка картинок
images.forEach(src => {
  const img = new Image();
  img.src = src;
});

setInterval(() => {
  // fade out
  slider.style.opacity = 0;

  setTimeout(() => {
    index = (index + 1) % images.length;
    slider.src = images[index];

    // небольшая задержка перед fade in
    requestAnimationFrame(() => {
      slider.style.opacity = 1;
    });
  }, 2000); // равно transition
}, 6000);
