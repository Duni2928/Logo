const selectNative = document.querySelector('.select-native');
const selectCustom = document.querySelector('.select-custom');
const selectCustomSelected = document.querySelector('.select-custom__selected');
const selectCustomOptions = document.querySelector('.select-custom__options');
const selectCustomOptionsList = Array.from(selectCustomOptions.children);
const selectCustomOption = document.querySelectorAll('.select-custom__option');
const optionsCount = selectCustomOption.length;
let optionCheckedIndex = 0;
let optionHoveredIndex = 0;
selectCustomSelected.addEventListener("click", () => {
  if (!selectCustomOptions.classList.contains("active")) {
    openSelectCustom()
  } else {
    closeSelectCustom()
  }
})
function openSelectCustom() {
  selectCustomOptions.classList.add("active");
  selectCustom.setAttribute("aria-hidden", true);
  document.addEventListener("click", clickOutside);
  document.addEventListener("keydown", supportKeyboardNavigation);
}
function closeSelectCustom() {
  selectCustomOptions.classList.remove("active");
  selectCustom.setAttribute("aria-hidden", false);
  document.removeEventListener("click", clickOutside);
  document.removeEventListener("keydown", supportKeyboardNavigation);
}
function selectHovered(newHoverIndex) {
  selectCustomOptionsList[optionHoveredIndex].classList.remove("hover");
  selectCustomOptionsList[newHoverIndex].classList.add("hover");
  optionHoveredIndex = newHoverIndex;
}
function selectChecked(newCheckIndex) {
  selectCustomOptionsList[optionCheckedIndex].classList.remove("active");
  selectCustomOptionsList[newCheckIndex].classList.add("active");
  selectCustomSelected.innerHTML = selectCustomOptionsList[newCheckIndex].innerHTML;
  optionCheckedIndex = newCheckIndex;
}
function clickOutside() {
  document.addEventListener("click", () => {
    if (!selectCustom.contains(event.target)) {
      selectCustomOptions.classList.remove("active");
    }
  });
}
function supportKeyboardNavigation(e) {
  if (event.keyCode === 40 && optionHoveredIndex < optionsCount - 1) {
    e.preventDefault();
    selectHovered(optionHoveredIndex + 1);
  }
  if (event.keyCode === 38 && optionHoveredIndex > 0) {
    e.preventDefault();
    selectHovered(optionHoveredIndex - 1);
  }
  if (event.keyCode === 13 || event.keyCode === 32) {
    e.preventDefault();
    let value = optionHoveredIndex + 1;
    selectNative.value = value;
    selectChecked(optionHoveredIndex);
    closeSelectCustom();
  }
  if (event.keyCode === 27) {
    closeSelectCustom();
  }
}
selectNative.addEventListener("change", (e) => {
  let value = e.target.value;
  selectChecked(value - 1);
});
selectCustomOption.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    const value = e.target.getAttribute("data-value");
    selectNative.value = value;
    selectChecked(index);
    closeSelectCustom();
  });
  /*item.addEventListener("mouseenter", () => {
    selectHovered(index);
  });*/
});