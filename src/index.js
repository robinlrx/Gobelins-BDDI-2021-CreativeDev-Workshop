
require('normalize.css/normalize.css');
require('./styles/index.scss');

import Mouse from "./utils/mouse"
import Easing from "./utils/easing"
import Images from "./images.js"


const canvas = document.querySelector('.main-canvas')
const ctx = canvas.getContext("2d")


// à chaque image : 60fps
const update = ()=>{
    requestAnimationFrame(update)

    // fisrt scrolling floor 

    ctx.drawImage(Images.atlas.Cloud, 0, 0)

}

Images.init()
requestAnimationFrame(update)

