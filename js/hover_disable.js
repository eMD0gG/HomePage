const el = document.querySelector(".business_card");
el.classList.add("disabled_hover");
setTimeout(function() {
    el.classList.remove("disabled_hover");
}, 3000);