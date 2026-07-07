import {renderer,camera, scene, sun} from "./createEnv.js";
import {planetMeshes} from "./planets.js";




function animatePlanets() {

    requestAnimationFrame(animatePlanets);

    sun.rotation.y +=0.01;

    planetMeshes.forEach((planet) => {

        // Orbit around the Sun
        planet.angle += planet.orbitSpeed;

        planet.mesh.position.x = sun.position.x + planet.orbitRadius * Math.cos(planet.angle);

        planet.mesh.position.z = sun.position.z + planet.orbitRadius * Math.sin(planet.angle);

        // Rotate on its own axis
        planet.mesh.rotation.y += planet.rotationSpeed;

    });

//Rendering The Scene
    renderer.render(scene, camera);
}

export { animatePlanets };