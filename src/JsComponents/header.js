const HEADER = {
    el: document.querySelector('.header-content'),
    sticky: false
}

window.addEventListener("scroll", (e) => {
    let offset = window.pageYOffset
    if (offset > 90) {
        HEADER.el.classList.add("sticky")
    } else {
        HEADER.el.classList.remove("sticky")
    }
})