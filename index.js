import * as THREE from "https://unpkg.com/three@0.181.1/build/three.module.js";

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












//Running The scene

renderer.render(scene, camera);