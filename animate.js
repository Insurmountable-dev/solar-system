// Rotating The Earth Around The Sun
let angle = 0;

function animateEarth(earth, sun) {

    angle +=0.01;

    earth.position.x = sun.position.x + 3* Math.cos(angle);

    earth.position.z = sun.position.z + 3* Math.sin(angle);

    earth.rotation.y += 0.02;

}

export { animateEarth };