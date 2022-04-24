if (document.querySelector(".content-checkout")) {
  let contentCheckoutItem = document.querySelectorAll(".content-checkout__item");
  let contentCheckoutBlock = document.querySelectorAll(".content-checkout__block");
  blockSwitch(contentCheckoutItem, contentCheckoutBlock)
}
if (document.querySelector(".order-checkout")) {
  let quantityBtnOrder = document.querySelectorAll(".quantity__btn");
  quantity(quantityBtnOrder)
}
if (document.querySelector(".checkout")) {
  const form = document.querySelector(".checkout");
  form.addEventListener("submit", formSend);
  function formSend(event) {
    event.preventDefault();
    let submitBtn = document.querySelector(".order-checkout__btn");
    submitBtn.classList.add("active");
    setTimeout (() => {
      submitBtn.classList.remove("active");
    }, 400);
    let error = formValidate(form);
    console.log(error);
    if (error === 0) {
      event.target.submit();
      alert("Форма отправлена");
    } else {
       alert("Заполните обязательные поля");
    }
  }
  let formReg = document.querySelectorAll(".reg");
  function formValidate(form) {
    let error = 0;
    formReg.forEach(function(item) {
      formRemoveError(item);
      if (item.classList.contains("email")) {
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(item.value)) {
          formAddError(item);
          error++;
        } 
      } else if (item.classList.contains("password")) {
        if (!/(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\s])(?=.*[0-9]).{6,}/g.test(item.value)) {
          formAddError(item);
          error++;
        }
      } else if (item.classList.contains("phone")) {
        if (!/^((\+7|7|8)([\s\-])?)?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(item.value)) {
          formAddError(item);
          error++;
        }
      } else if (item.getAttribute("type")=== "checkbox" && item.checked ===false) {
        formAddError(item);
        error++;
      } else {
        if (item.value === "") {
          formAddError(item);
          error++;
        }
      }
    })
    return error
  }
  formReg.forEach(function(item) {
    item.addEventListener("change",function() {
      formRemoveError(item);
      if (item.classList.contains("email")) {
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(item.value)) {
          formAddError(item);
          error++;
        } 
      } else if (item.classList.contains("password")) {
        if (!/(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\s])(?=.*[0-9]).{6,}/g.test(item.value)) {
          formAddError(item);
          error++;
        }
      } else if (item.classList.contains("phone")) {
        if (!/^((\+7|7|8)([\s\-])?)?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(item.value)) {
          formAddError(item);
          error++;
        }
      } else if (item.getAttribute("type")=== "checkbox" && item.checked ===false) {
        formAddError(item);
        error++;
      } else {
        if (item.value === "") {
          formAddError(item);
          error++;
        }
      }
    })
  })
  function formAddError(item) {
    item.parentElement.classList.add("error");
    item.classList.add("error")
  }
  function formRemoveError(item) {
    item.parentElement.classList.remove("error");
    item.classList.remove("error")
  }
}

