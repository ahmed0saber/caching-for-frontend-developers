const clicksBtn = document.querySelector(".clicks-btn")
let counter = 0

clicksBtn?.addEventListener("click", () => {
    clicksBtn.innerHTML = `${ ++counter } clicks`
})