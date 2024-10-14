const el = document.querySelector(".business_card");
el.classList.add("disabled_events");
setTimeout(function() {
    el.classList.remove("disabled_events");
}, 7000);