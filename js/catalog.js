if (document.querySelector(".filter")) {
  const filterTitle = document.querySelector(".filter__title");
  const filterContent = document.querySelector(".filter__content");
  const filterArrow = document.querySelectorAll(".filter-arrow");
  const priceSlider = document.querySelector('.price-filter__slider');
  filterTitle.addEventListener("click", () => {
    if (!filterContent.classList.contains("active")) {
      filterContent.classList.add("active")
    } else {
      setTimeout(function () {
        filterContent.classList.remove("active")
      }, 500);
    }
  })
  filterArrow.forEach(item => {
    item.addEventListener("click", () => {
      item.classList.toggle("active")
    })
  })
  noUiSlider.create(priceSlider, {
    start: [20000, 80000],
    connect: true,
    tooltips: true,
    range: {
      'min': 0,
      'max': 199999
    }
  });
  let priceStart = document.getElementById("price-start");
  let priceEnd = document.getElementById("price-end");
  priceStart.addEventListener("change", () => {
    priceSlider.noUiSlider.set([priceStart.value, null])
  });
  priceEnd.addEventListener("change", () => {
    priceSlider.noUiSlider.set([null, priceEnd.value])
  });
  let priceValues = [priceStart, priceEnd];
  priceSlider.noUiSlider.on('update', function (values, handle) {
    priceValues[handle].value = values[handle];
  });
}
if (document.querySelector(".show-catalog")) {
  const showCatalog = document.querySelectorAll(".show-catalog");
  showCatalog.forEach(function (item, i) {
    const selectShowNative = document.querySelectorAll('.select-show__native')[i];
    const selectShowCustom = document.querySelectorAll('.select-show__custom')[i];
    const selectShowSelected = document.querySelectorAll('.select-show__selected')[i];
    const selectShowOptions = document.querySelectorAll('.select-show__options')[i];
    const selectShowOptionsList = Array.from(selectShowOptions.children);
    const selectShowOption = selectShowOptions.querySelectorAll('.select-show__option');
    const selectShowOptionCount = selectShowOption.length;
    selectShow(selectShowNative, selectShowCustom, selectShowSelected, selectShowOptions, selectShowOptionsList, selectShowOption, selectShowOptionCount)
  })

}
if (document.querySelector(".order-catalog")) {
  const orderCatalog = document.querySelector(".order-catalog");
  const selectOrderNative = document.querySelector('.select-order__native');
  const selectOrderCustom = document.querySelector('.select-order__custom');
  const selectOrderSelected = document.querySelector('.select-order__selected');
  const selectOrderOptions = document.querySelector('.select-order__options');
  const selectOrderOptionsList = Array.from(selectOrderOptions.children);
  const selectOrderOption = selectOrderOptions.querySelectorAll('.select-order__option');
  const selectOrderOptionCount = selectOrderOption.length;
  selectShow(selectOrderNative, selectOrderCustom, selectOrderSelected, selectOrderOptions, selectOrderOptionsList, selectOrderOption, selectOrderOptionCount)
}