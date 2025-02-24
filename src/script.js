import * as THREE from "three";

// Sélectionne le canvas
const canvas = document.querySelector("#scene");

// Création de la scène
const scene = new THREE.Scene();

// Création de la caméra (champ de vision, aspect ratio, near, far)
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.z = 5;

// Création du renderer
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// Ajout du renderer au DOM
document.body.appendChild(renderer.domElement);

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

// Gestion du redimensionnement de la fenêtre
window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
