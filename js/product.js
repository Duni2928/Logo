if (document.querySelector(".images-product")) {
  let imagesProductSubslider = new Swiper(".images-product__subslider", {
    observe: true,
    observeParents: true,
    slidesPerView: 4,
    spaceBetween: 12,
    speed: 800,
  });
  let imagesProductMainslider = new Swiper(".images-product__mainslider", {
    observe: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 0,
    thumbs: {
      swiper: imagesProductSubslider
    },
    speed: 800,
  });
}
if (document.querySelector(".actions-product")) {
  let quantityBtnProduct = document.querySelectorAll(".quantity__btn");
  quantity(quantityBtnProduct)
}
if (document.querySelector(".details-product")) {
  let detailsProductItem = document.querySelectorAll(".details-product__item");
  let detailsProductBlock = document.querySelectorAll(".details-product__block");
  blockSwitch(detailsProductItem, detailsProductBlock)
}