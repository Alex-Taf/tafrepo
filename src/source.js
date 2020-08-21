import "./source.sass"
import "./source.pug"
import "./JsComponents/slider"
import SLIDER from "./JsComponents/slider"
import HEADER from "./JsComponents/header"

SLIDER.el.items.setWidth(document.body.clientWidth)
SLIDER.setDots()
SLIDER.setSkipDelay(3000)
SLIDER.init()