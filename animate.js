import {renderer,camera, scene} from "./createEnv.js";


// Rotating The Earth Around The Sun
let angle = 0;

function animatePlanets() {

    requestAnimationFrame(animatePlanets);

//Rendering The Scene
    renderer.render(scene, camera);
}

export { animatePlanets };