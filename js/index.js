let openNavBtn = document.getElementById('openNavBtn')
const nav = document.getElementById('nav')
const closeNav = document.getElementById('closeNav')
const links = document.querySelectorAll('.links .link');

openNavBtn.addEventListener('click', displayNav)

closeNav.addEventListener('click', closeTheNav)

const mobileView = false

function displayNav (e) {
    e.preventDefault();
    nav.style.display = 'flex'
    closeNav.style.display='flex'
    openNavBtn.style.display='none'
    mobileView = true
}

function closeTheNav (e) {
    e.preventDefault();
    nav.style.display = 'none'
    closeNav.style.display='none'
    openNavBtn.style.display='flex'
    mobileView = false

}

links.forEach(link => {
link.addEventListener('click', function () {
links.forEach(l => l.classList.remove('active'));
this.classList.add('active');
  });
});

links.forEach(link => {
  link.addEventListener('click',(e)=> {
    closeTheNav(e)
  });
});

