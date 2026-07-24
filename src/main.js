import './style.css'

import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.setZ(30);




const pointLight = new THREE.PointLight(0xffffff);

pointLight.position.set(5, 5,5)

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight)

const controls = new OrbitControls(camera, renderer.domElement);

function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({color:0xffffff})

  const star = new THREE.Mesh(geometry, material);

const x = THREE.MathUtils.randFloatSpread(100);
const y = THREE.MathUtils.randFloatSpread(1000);
const z =THREE.MathUtils.randFloatSpread(200);

  star.position.set(x, y, z);
  scene.add(star)
}



Array(200).fill().forEach(addStar)





const mmoonn = new THREE.TextureLoader().load('mmoon.jpg');

const moon = new THREE.Mesh(
  new THREE.SphereGeometry(10, 64, 32),
  new THREE.MeshStandardMaterial({
    map:mmoonn,
  }

  )
);

moon.position.set(-20, 0, 0);


const MMercury = new THREE.TextureLoader().load('MMercury.jpg');



const Mercury = new THREE.Mesh(
  new THREE.SphereGeometry(10, 64, 32),
  new THREE.MeshStandardMaterial({
    map:MMercury,
  }

  )
);

Mercury.position.set(20, -40, 0);



const Vvenus = new THREE.TextureLoader().load('VVenus.jpg');

const Venus = new THREE.Mesh(
  new THREE.SphereGeometry(10, 64, 32),
  new THREE.MeshStandardMaterial({
    map:Vvenus,
  }

  )
);

Venus.position.set(-20, -80, 0);




const EEarth = new THREE.TextureLoader().load('EEarth.jpg');

const Earth = new THREE.Mesh(
  new THREE.SphereGeometry(10, 64, 32),
  new THREE.MeshStandardMaterial({
    map:EEarth,
  }

  )
);

Earth.position.set(20, -120, 0)





const MMars = new THREE.TextureLoader().load('MMars.jpg');

const Mars = new THREE.Mesh(
  new THREE.SphereGeometry(10, 64, 32),
  new THREE.MeshStandardMaterial({
    map:MMars,
  }

  )
);

Mars.position.set(-20, -160, 0);





const JJupiter = new THREE.TextureLoader().load('JJupiter.jpg');

const Jupiter = new THREE.Mesh(
  new THREE.SphereGeometry(10, 64, 32),
  new THREE.MeshStandardMaterial({
    map: JJupiter,
  }

  )
);

Jupiter.position.set(20, -200, 0);






const Ssaturn = new THREE.TextureLoader().load('Ssaturn.jpg');

const Saturn = new THREE.Mesh(
  new THREE.SphereGeometry(10, 64, 32),
  new THREE.MeshStandardMaterial({
    map:Ssaturn,
  }

  )
);


Saturn.position.set(-20, -240, 0);





const UUranus = new THREE.TextureLoader().load('UUranus.jpg');

const Uranus = new THREE.Mesh(
  new THREE.SphereGeometry(10, 64, 32),
  new THREE.MeshStandardMaterial({
    map:UUranus,
  }

  )
);


Uranus.position.set(20, -280, 0);





const NNeptune = new THREE.TextureLoader().load('NNeptune.jpg');

const Neptune = new THREE.Mesh(
  new THREE.SphereGeometry(10, 64, 32),
  new THREE.MeshStandardMaterial({
    map:NNeptune,
  }

  )
);

Neptune.position.set(-20, -320, 0);







scene.add(moon, Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune)




function moveCamera() {
const t = document.body.getBoundingClientRect().top;



camera.position.y = t * 0.05;


}
document.body.onscroll = moveCamera;

moveCamera();


const planets = [
moon,
Mercury,
Venus,
Earth,
Mars,
Jupiter,
Saturn,
Uranus,
Neptune,
];






function animate () {
  requestAnimationFrame(animate);

planets.forEach(planet => {
  planet.rotation.x += 0.001;
  planet.rotation.y += 0.002;
});

controls.update()

  renderer.render(scene, camera);
}
animate();