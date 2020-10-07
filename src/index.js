
require('normalize.css/normalize.css');
require('./styles/index.scss');

import Mouse from "./utils/mouse"
import Easing from "./utils/easing"

const canvas = document.querySelector('.main-canvas')
const ctx = canvas.getContext("2d")


// à chaque image : 60fps
const update = ()=>{
    requestAnimationFrame(update)
    console.log(Mouse.cursor, ctx)
}
requestAnimationFrame(update)
