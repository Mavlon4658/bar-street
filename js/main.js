// comment slider
let swiper = new Swiper(".commentSwiper", {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: ".comment-button-next",
      prevEl: ".comment-button-prev",
    },
});
// comment slider

// partner slider
let swiper2 = new Swiper(".partnerSwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: ".comment-button-next",
      prevEl: ".comment-button-prev",
    },
});
// partner slider

// partner slider
let swiper3 = new Swiper(".clientsSwiper", {
    slidesPerView: 7,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".clients-button-next",
      prevEl: ".clients-button-prev",
    },
});
// partner slider

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