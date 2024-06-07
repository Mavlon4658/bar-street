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


// Range slider
let rangeInp = document.querySelectorAll('.range_inp');

if (rangeInp.length) {
    rangeInp.forEach(el => {
        let inp = el.querySelector('input[type="range"]');
        let line = el.querySelector('.range_inp__slide_line');
        let spn = el.querySelector('.range_inp__slide span');
        let maxVal = Number(el.querySelector('input[type="range"]').getAttribute('max'));

        spn.textContent = inp.value;
        line.style.width = 100 * inp.value / maxVal + '%';
        spn.style.left = 100 * inp.value / maxVal + '%';

        inp.oninput = () => {
            spn.textContent = inp.value;
            line.style.width = 100 * inp.value / maxVal + '%';
            spn.style.left = 100 * inp.value / maxVal + '%';
        }
    })
}
// Range slider end

let quizSlider = new Swiper('.modal_quiz .swiper', {
    slidesPerView: 1,
    // initialSlide: 3,
    allowTouchMove: false,
    effect: 'fade',
})

let quizSelect = document.querySelectorAll('.modal_quiz__select li');
if (quizSelect.length) {
    quizSelect.forEach(item => {
        item.onclick = () => {
            quizSelect.forEach(el => {
                if (item == el) {
                    el.classList.add('active');
                } else {
                    el.classList.remove('active');
                }
            })
        }
    })
}

let priceSelect = document.querySelectorAll('.modal_quiz__prices li');
if (priceSelect.length) {
    priceSelect.forEach(item => {
        item.onclick = () => {
            priceSelect.forEach(el => {
                if (el == item) {
                    el.classList.add('active');
                } else {
                    el.classList.remove('active')
                }
            })
        }
    })
}

let mainModal = document.querySelectorAll('.main_modal'),
    quizModal = document.querySelector('.modal_quiz'),
    quizModalOpen = document.querySelectorAll('.modal_quiz__open'),
    modalClose = document.querySelectorAll('.main_modal__bg');

quizModalOpen.forEach(el => {
    el.onclick = e => {
        e.preventDefault();
        quizModal.classList.add('active');
        document.body.style.overflow = 'hidden'
    }
})

function allModalclose () {
    document.body.style.overflow = 'visible'
    mainModal.forEach(modal => {
        modal.classList.remove('active');
    })
}

modalClose.forEach(el => {
    el.onclick = () => {
        allModalclose();
    }
})

let quizPrevBtn = document.querySelectorAll('.modal_quiz .btn-gray');
quizPrevBtn.forEach((el, idx) => {
    el.onclick = () => {
        if (idx == 0) {
            allModalclose();
        } else {
            quizSlider.slidePrev();
        }
    }
})

let quizNextBtn = document.querySelectorAll('.modal_quiz .btn-red');
quizNextBtn.forEach((el, idx) => {
    el.onclick = () => {
        if (idx == quizNextBtn.length - 1) {
            allModalclose();
        } else {
            quizSlider.slideNext();
        }
    }
})

let menuSlider = new Swiper('.menu .swiper', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    mousewheel: true,
})
let menu = document.querySelector('.menu')

function toggleMenu () {
    if (window.scrollY > 300) {
        menu.classList.add('active')
    } else {
        menu.classList.remove('active');
    }
}

toggleMenu();

window.addEventListener('scroll', function () {
    toggleMenu();
})

let cocktailList = document.querySelectorAll('.cocktail__card'),
    cocktailShowMore = document.querySelector('.cocktail .btn-red'),
    cocktailLength = 10;

function sortCocktailList () {
    cocktailList.forEach((el, idx) => {
        if (idx + 1 <= cocktailLength) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    })
}

sortCocktailList();

cocktailShowMore.onclick = e => {
    e.preventDefault();
    cocktailLength += 5;
    sortCocktailList();
}