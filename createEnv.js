import * as THREE from "https://unpkg.com/three@0.181.1/build/three.module.js";

//Creating The Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

//Creating the Camera
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);


//camera position
camera.position.set(0,1, 20);


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
const sunGeometry = new THREE.SphereGeometry(5,64,64);
const sunMaterial = new THREE.MeshStandardMaterial({
    color: 0xffcc00,
    emissive: 0xffaa00,
    emissiveIntensity: 3
});

const sun = new THREE.Mesh(sunGeometry, sunMaterial);
scene.add(sun);

// Creating Sphere
const sphere = new THREE.SphereGeometry(1, 64, 64);





// Exporting Needed Items
export{scene, camera, renderer, sphere, THREE, sun};

