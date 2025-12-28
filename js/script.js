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


const headers = document.querySelectorAll('.box.content h2[id]');
const navItems = document.querySelectorAll('.navbar .nav .item');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      navItems.forEach(item => item.classList.remove('active'));

      const link = document.querySelector(
        `.navbar a[href="#${entry.target.id}"]`
      );

      link?.closest('.item')?.classList.add('active');
    });
  },
  {
    rootMargin: '-40% 0px -50% 0px'
  }
);

headers.forEach(h => observer.observe(h));
