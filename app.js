
// select elements

const header = document.querySelector('.header')
const nav = document.querySelector('.nav')
const ul = document.querySelector('.nav__menu')

// sticky navigator using Intersection observer api for better performance

const navHeight = nav.getBoundingClientRect().height

const stickyNav = (entries) => {

  const [entry] = entries

  if (!entry.isIntersecting) {
    return nav.classList.add('header__sticky')
  }
  else {
    nav.classList.remove('header__sticky')
  }
}

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `${navHeight}px`
})

headerObserver.observe(header)

// page navigation scroll smoothly with event delegation

const sections = document.querySelectorAll('section')

ul.addEventListener('click', (e) => {
  e.preventDefault()

  if (e.target.classList.contains('nav__link')) {
    const linkRef = e.target.getAttribute('href')
    document.querySelector(linkRef).scrollIntoView({
      behavior: "smooth"
    });
    sections.forEach((section) => (section.style.paddingTop = "120px"));
  }
});

// fading animation with better performance

const allSections = document.querySelector('.section')

const sectionObserver = new IntersectionObserver(fading)