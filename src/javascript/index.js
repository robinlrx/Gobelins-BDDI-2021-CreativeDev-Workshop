import Mouse from "./utils/mouse"
import Easing from "./utils/easing"

import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";


const canvas = document.querySelector('.main-canvas')

// Setup Scene
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer({
   canvas: canvas
});

renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(window.devicePixelRatio)

window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
})
// End Setup Scene

// Display axes
const axesHelper = new THREE.AxesHelper(100);//size of axes
scene.add( axesHelper );


// à chaque image : 60fps
const update = () => {
   requestAnimationFrame(update)


   // Render WebGL Scene
   renderer.render(scene, camera);

}
requestAnimationFrame(update)
