// comment slider
let swiper = new Swiper(".commentSwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: ".comment-button-next",
      prevEl: ".comment-button-prev",
    },
    breakpoints: {
      993: {
        slidesPerView: 2,
      },
    },
});
// comment slider

// partner slider
let swiper2 = new Swiper(".partnerSwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: ".partner-button-next",
      prevEl: ".partner-button-prev",
    },
});
// partner slider

// clients slider
let swiper3 = new Swiper(".clientsSwiper", {
    slidesPerView: 7,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".clients-button-next",
      prevEl: ".clients-button-prev",
    },
});
// clients slider

// accardion
const items = document.querySelectorAll('.accordion button');

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));
// accardion