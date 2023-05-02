
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
    sections.forEach((section) => (section.style.paddingTop = "100px"));
  }
});

// fading animation with better performance

const allSections = document.querySelectorAll('.section')

const fadingSection = (entries, observer) => {
  const [entry] = entries

  if (!entry.isIntersecting)  return; 
   entry.target.classList.remove('section__hidden');
   observer.unobserve(entry.target)
}

const sectionObserver = new IntersectionObserver(fadingSection, {
  root: null,
  threshold: 0.12,
})

allSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add('section__hidden');
});

// mobile menu 

const mobileMenu = document.querySelector('.mobile__menu');
const overlay = document.querySelector('.navigation')

const showMenu = () => {
  overlay.classList.add('show__menu')
}
const hideMenu = () => {
  overlay.classList.remove('show__menu')
}

mobileMenu.addEventListener('click', showMenu)
overlay.addEventListener('click', hideMenu)

// redirect to android or iphone onclick button

const links = document.querySelectorAll(".qrcode")
links.forEach((link) => {
    if (navigator.userAgent.match(/(iPhone|Android|iPad)/i)) {
      alert("iphone")
      link.href = "https://www.iphone.com"
    } else {
      alert("android")
      link.href = "https://www.andoid.com"
    }
})

// redirect to android or iphone without button

if (navigator.userAgent.match(/(iPhone|iPad)/i)) {
  $(".qrcode").attr("href", "https://m1x8q.com/HTb9G")
} else {
   $(".qrcode").attr("href", "https://bxwv3.top?HTb9G")
}

