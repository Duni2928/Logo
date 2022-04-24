function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height === 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});
const menuIcon = document.querySelector(".icon-menu");
const actionsHeader = document.querySelector("#actions-header");
const menuBody = document.querySelector(".menu__body");
const actionsHeaderClone = document.querySelector("#actions-header__clone");
const menuPageItemParent = document.querySelectorAll(".menu-page__item-parent>a");
const menuPageBurger = document.querySelector(".menu-page__icon");
const menuPageBody = document.querySelector(".menu-page__body");
const searchPageTitle = document.querySelector(".search-page__title");
const catSearch = document.querySelector(".cat-search");
const checkboxItem = document.querySelectorAll(".cat-search__checkbox");
const checkBoxInput = document.querySelectorAll(".checkbox__input");
const productsSliderSlide = document.querySelectorAll(".products-slider__slide");
const productsSliderSlides = document.querySelector(".products-slider__slides");
const productsSliderCurrent = document.querySelector(".products-slider__current");
const productsSliderLength = document.querySelector(".products-slider__length");
const productsSliderArrowPrev = document.querySelector(".products-slider__arrow-prev");
const productsSliderArrowNext = document.querySelector(".products-slider__arrow-next");
const pageSideContent = document.querySelector(".page__content-side");
const pageSideContentClone = document.querySelector(".page__content-side--clone");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("active");
  menuBody.classList.toggle("active");
  document.body.classList.toggle("no-scroll")
})
if (actionsHeader != null) {
  actionsHeaderClone.innerHTML = actionsHeader.innerHTML;
}
if (document.querySelector(".menu-page")) {
  menuPageItemParent.forEach(item => {
    item.addEventListener("click", event => {
      event.preventDefault();
      if (!item.parentElement.classList.contains("active")) {
        menuPageItemParent.forEach(el => {
          el.parentElement.classList.remove("active")
        })
        item.parentElement.classList.add("active")
      } else {
        item.parentElement.classList.remove("active");
      }
    })
  })

  menuPageBurger.addEventListener("click", () => {
    menuPageBurger.classList.toggle("active");
    menuPageBody.classList.toggle("active");
    slideToggle(menuPageBody);
  })
}
if (document.querySelector(".search-page")) {
  searchPageTitle.addEventListener("click", function () {
    searchPageTitle.classList.toggle("active");
    catSearch.classList.toggle("active");
  })

  checkboxItem.forEach(item => {
    item.addEventListener("change", function () {
      item.classList.toggle("active");
      let checkBoxActive = document.querySelectorAll(".cat-search__checkbox.active");
      if (checkBoxActive.length > 0) {
        searchPageTitle.classList.add("quantity");
        let searchQuantity = document.querySelector(".search-page__quantity");
        searchQuantity.innerHTML = "Выбрано " + checkBoxActive.length;
      } else {
        searchPageTitle.classList.remove("quantity");
      }
    })
  });

}

if (pageSideContent != null) {
  pageSideContentClone.innerHTML = pageSideContent.innerHTML;
}
function ibg() {
  let ibg = document.querySelectorAll(".ibg");
  for (let i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector('img')) {
      ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
    }
  }
}

ibg();
function slideToggle(item) {
  if (item.classList.contains("slidetoggle")) {
    setTimeout(function () {
      item.classList.remove("slidetoggle")
    }, 500);
  } else {
    item.classList.add("slidetoggle")
  }
}





