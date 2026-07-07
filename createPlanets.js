import * as THREE from "https://unpkg.com/three@0.181.1/build/three.module.js";
import {planets, planetMeshes} from "./planets.js";


const sphere = new THREE.SphereGeometry(1, 64, 64);

function createPlanets(scene){

    planets.forEach(planet => {

        const material = new THREE.MeshStandardMaterial({
            color: planet.color
        });


        const mesh = new THREE.Mesh(sphere, material);

        mesh.scale.set(
            planet.radius,
            planet.radius,
            planet.radius
        );

        // Setting Position Of Planets
        mesh.position.x = planet.orbitRadius;
        mesh.position.z = planet.zOrbitRadius
        scene.add(mesh);

        planetMeshes.push({
            ...planet,
            mesh,
            angle: 0
        });

    })
}


export {createPlanets};