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


// Création d'une géométrie de sphère
const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);

// Matériau lumineux avec un effet émissif
const sphereMaterial = new THREE.MeshStandardMaterial({
    color: 0x44aa88,
    emissive: 0x22ffcc,
    emissiveIntensity: 1,
    roughness: 0.1,
    metalness: 0.9,
});

// Création de la sphère
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add(sphere);

// Ajout d'une lumière directionnelle
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(2, 2, 5);
scene.add(light);

// Ajout d'une lumière ambiante pour un meilleur rendu
const ambientLight = new THREE.AmbientLight(0x404040, 2);
scene.add(ambientLight);

// Animation de la sphère
function animate() {
    requestAnimationFrame(animate);

    // Rotation de la sphère
    sphere.rotation.y += 0.01;
    sphere.rotation.x += 0.005;

    renderer.render(scene, camera);
}

animate();
