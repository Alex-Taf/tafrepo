const SLIDER = {
    el: {
        wrapper: document.querySelector(".slider-wrapper"),
        length: document.querySelector(".slider-length"),
        items: document.querySelectorAll('.slider-item'),
        dots: null,
        dotsWrapper: document.querySelector(".slider-dots-wrapper")
    },
    options: {
        width: undefined
    },
    dotNumber: 0,
    delay: 0
}

SLIDER.el.items.setWidth = width => { 
    SLIDER.el.items.forEach((item) => {
        item.style.width = `${width}px`
    })
    SLIDER.options.width = width 
}

SLIDER.setDots = () => {
    if (SLIDER.el.items.length > 0) {
        for (let i = 0; i < SLIDER.el.items.length; i++) {
            SLIDER.el.dotsWrapper.insertAdjacentHTML("beforeend", 
            `<div class="slider-dots-item" data-num="${i}"></div>`)

            SLIDER.el.dots = document.querySelectorAll(".slider-dots-item")
        }
    } else {
        SLIDER.el.dotsWrapper.insertAdjacentHTML("beforeend",
        `<h2>Items Not Found</h2>`)
    }
}

SLIDER.setSkipDelay = delay => {
    SLIDER.delay = delay
}

SLIDER.init = () => {
    if (SLIDER.el.dots !== null) {
        SLIDER.el.dots[SLIDER.dotNumber].classList.add("active")
        SLIDER.el.dots.forEach(item => {
            item.addEventListener("click", () => {
                SLIDER.el.dots[SLIDER.dotNumber].classList.remove("active")
                SLIDER.dotNumber = item.dataset.num
                SLIDER.el.dots[SLIDER.dotNumber].classList.add("active")
                SLIDER.el.length.style.transform = `translateX(${-SLIDER.options.width * SLIDER.dotNumber}px)`
            })
        })
    }
}

SLIDER.skip = () => {
    if (SLIDER.dotNumber < SLIDER.el.items.length - 1) {
        SLIDER.dotNumber++
        if (SLIDER.el.dots !== null) {
            SLIDER.el.dots[SLIDER.dotNumber - 1].classList.remove("active")
            SLIDER.el.dots[SLIDER.dotNumber].classList.add("active")
        }
        SLIDER.el.length.style.transform = `translateX(${-SLIDER.options.width * SLIDER.dotNumber}px)`
        if (SLIDER.dotNumber < 0) { SLIDER.dotNumber = SLIDER.el.items.length - 1 }
    } else if (SLIDER.dotNumber === SLIDER.el.items.length - 1) {
        if (SLIDER.el.dots !== null) {
            SLIDER.el.dots[SLIDER.dotNumber].classList.remove("active")
            SLIDER.el.dots[0].classList.add("active")
        }
        SLIDER.dotNumber = 0
        SLIDER.el.length.style.transform = `translateX(${-SLIDER.options.width * SLIDER.dotNumber}px)`
    }
}

window.addEventListener("load", (e) => {
    clearInterval(SLIDER.timer)

    SLIDER.timer = setInterval(() => {
        SLIDER.skip()
    }, SLIDER.delay)
})

SLIDER.el.wrapper.addEventListener("mouseover", (e) => {
    clearInterval(SLIDER.timer)
})

SLIDER.el.wrapper.addEventListener("mouseout", (e) => {
    SLIDER.timer = setInterval(() => {
        SLIDER.skip()
    }, SLIDER.delay)
})

export default SLIDER