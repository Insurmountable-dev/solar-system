import * as THREE from "https://unpkg.com/three@0.181.1/build/three.module.js";
import {animateEarth} from "./animate.js";

//Creating The Scene

const scene = new  THREE.Scene();

//Creating the Camera

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

//camera position
camera.position.z = 5;

//Create Renderer

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


// Add lighting

const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
scene.add(ambientLight);

const sunLight = new THREE.PointLight(0xffffff, 0.2);
scene.add(sunLight);


// Create The sun

const sunGeometry = new THREE.SphereGeometry();
const sunMaterial = new THREE.MeshStandardMaterial({
    color: 0xffcc00,
    emissive: 0xffaa00,
    emissiveIntensity: 3
});

const sun = new THREE.Mesh(sunGeometry, sunMaterial);

scene.add(sun);

// Create Earth

const earthGeometry = new THREE.SphereGeometry();
const earthMaterial = new THREE.MeshStandardMaterial({  color: 0x0000ff});
const earth = new THREE.Mesh(earthGeometry, earthMaterial);

scene.add(earth);

// animate

function animate () {
    requestAnimationFrame(animate);

    // Earth rotating around the sun
    animateEarth(earth,sun);


    //Running The scene
    renderer.render(scene, camera);
}

// calling the function
animate();
