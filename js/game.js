import KeyEvent from "./keyEvent.js";
import Player from "./player.js";

export default class Game {
    constructor(document) {
        this.document = document;
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.document.body.appendChild(this.renderer.domElement);
        this.keyEvent = new KeyEvent(this.document);
        this.player = new Player(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 1))
    }

    initScene() {
        this.player.position.z = 5;

        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

        for (let i = 0; i < 100; i++) {
            const cube = new THREE.Mesh(geometry, material);
            cube.position.x = i * 1.2;
            this.scene.add(cube);
        }
    }

    update() {
        this.keyEvent.update();
        this.player.update(this.keyEvent);

        this.updateCamera();
    }

    updateCamera() {
        this.camera.position.x = this.player.position.x;
        this.camera.position.y = this.player.position.y;
        this.camera.position.z = this.player.position.z;

        this.camera.rotateOnAxis(this.player.upAxis, this.player.upAngle);
    }

    render() {
        this.renderer.render(this.scene, this.camera);
    }

}
