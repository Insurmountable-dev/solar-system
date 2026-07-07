 const planets = [

  {
    name: "Mercury",
    radius: 0.38,
    orbitRadius: -4,
    orbitSpeed: 0.04,
    rotationSpeed: 0.004,
    color: 0x8c8c8c,
    zOrbitRadius:0
  },
  {
    name: "Venus",
    radius: 0.95,
    orbitRadius: 6,
    orbitSpeed: 0.015,
    rotationSpeed: 0.002,
    color: 0xe6c16c,
    zOrbitRadius:-6

  },
  {
    name: "Earth",
    radius: 1,
    orbitRadius: -8,
    orbitSpeed: 0.01,
    rotationSpeed: 0.02,
    color: 0x2a6eff,
    zOrbitRadius:10

  },
  {
    name: "Mars",
    radius: 0.53,
    orbitRadius: 10,
    orbitSpeed: 0.008,
    rotationSpeed: 0.018,
    color: 0xc1440e,
    zOrbitRadius:-10
  },
  {
    name: "Jupiter",
    radius: 2.5,
    orbitRadius: -14,
    orbitSpeed: 0.004,
    rotationSpeed: 0.04,
    color: 0xd2b48c,
    zOrbitRadius:-20
  },
  {
    name: "Saturn",
    radius: 2.1,
    orbitRadius: 18,
    orbitSpeed: 0.003,
    rotationSpeed: 0.035,
    color: 0xf4d27a,
    zOrbitRadius:3
  },
  {
    name: "Uranus",
    radius: 1.6,
    orbitRadius: 22,
    orbitSpeed: 0.002,
    rotationSpeed: 0.03,
    color: 0x7fffd4,
    zOrbitRadius:-15
  },
  {
    name: "Neptune",
    radius: 1.5,
    orbitRadius: -26,
    orbitSpeed: 0.0015,
    rotationSpeed: 0.032,
    color: 0x4169e1,
    zOrbitRadius:0
  }
];


const planetMeshes = [];

export {planets,planetMeshes};