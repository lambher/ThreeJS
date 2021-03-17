export default class Player {
    constructor(position, direction) {
        this.position = position;
        this.direction = direction;
        this.velocity = new THREE.Vector3(0, 0, 0);
        this.upAxis = new THREE.Vector3(0, 1, 0);
        this.upAngle = 0;
    }

    update(keyEvent) {
        if (keyEvent.keys.forward) {
            this.forward();
        }
        if (keyEvent.keys.backward) {
            this.backward();
        }
        if (keyEvent.keys.left) {
            this.left();
        }
        if (keyEvent.keys.right) {
            this.right();
        }

        if (keyEvent.keys.space) {
            this.up();
        }
        if (keyEvent.keys.shift) {
            this.down();
        }
        if (keyEvent.keys.turnRight) {
            this.turnRight();
        }
        if (keyEvent.keys.turnLeft) {
            this.turnLeft();
        }

        this.position.add(this.velocity);


        this.velocity.multiplyScalar(0.95);
        this.upAngle *= 0.95;
    }

    stop() {
        this.velocity = new THREE.Vector3(0, 0, 0);
    }

    forward() {
        this.velocity.z = -0.02;
    }


    backward() {
        this.velocity.z = 0.02;
    }


    left() {
        this.velocity.x = -0.02;
    }

    right() {
        this.velocity.x = 0.02;
    }

    up() {
        this.velocity.y = 0.02;
    }

    down() {
        this.velocity.y = -0.02;
    }

    turnRight() {
        this.upAngle = -0.01;
    }

    turnLeft() {
        this.upAngle = 0.01;
    }
}