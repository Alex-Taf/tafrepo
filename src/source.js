import "./source.sass"
import "./source.pug"
import "./JsComponents/slider"
import SLIDER from "./JsComponents/slider"

SLIDER.el.items.setWidth(document.body.clientWidth)
SLIDER.setDots()
SLIDER.init()
SLIDER.autoSkip(3000)