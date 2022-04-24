if (document.querySelector(".mainslider")) {
  const sliderImage = document.querySelectorAll(".mainslider__image");
  const sliderPaginationItem = document.querySelectorAll(".pagination-slider__item");
  for (let index = 0; index < sliderImage.length; index++) {
    let slideImage = sliderImage[index].querySelector("img").getAttribute("src");
    console.log(slideImage);
    sliderPaginationItem[index].style.backgroundImage = "url('" + slideImage + "')"
  }
  let subSlider = new Swiper(".mainslider__subslider", {
    width: 60,
    slidesPerView: 4,
    breakpoints: {
      991.98: {
        width: 216
      }
    },
    speed: 800,
  });
  let mainSlider = new Swiper(".mainslider__mainslider", {
    autoplay: {
      delay: 2000,
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
    },
    slidesPerView: 1,
    thumbs: {
      swiper: subSlider
    },
    speed: 800,
  });
}
if (document.querySelector(".products-slider")) {
  let productsSlider = new Swiper(".products-slider__wrapper", {
    slidesPerView: 1,
    allowTouchMove: false,
    pagination: {
      el: ".products-slider__info",
      type: "fraction"
    },
    navigation: {
      nextEl: '.products-slider__arrow-next',
      prevEl: '.products-slider__arrow-prev',
    },
    speed: 800
  })
}
if (document.querySelector(".brands-slider")) {
  let brandsSlider = new Swiper(".brands-slider__wrapper", {
    slidesPerView: 1,
    navigation: {
      nextEl: '.brands-slider__arrow-next',
      prevEl: '.brands-slider__arrow-prev',
    },
    breakpoints: {
      991.98: {
        slidesPerView: 5,
      },
      767.98: {
        slidesPerView: 4,
      },
      599.98: {
        slidesPerView: 3,
      },
      469.98: {
        slidesPerView: 2,
      }
    },
    speed: 800,
  })
}


