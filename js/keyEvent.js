export default class KeyEvent {
    constructor(document) {
        this.document = document;
        this.keys = {
            forward: false,
            backward: false,
            left: false,
            right: false,
            space: false,
            shift: false,
            turnRight: false,
            turnLeft: false,
        };
        this.gamepadConnected = false;

        // window.addEventListener("gamepadconnected", (e) => this.onGamepadConnected(e));
        // window.addEventListener("gamepaddisconnected", (e) => this.onGamepadDisconnected(e));

        this.document.addEventListener('keydown', (e) => this.onKeyDown(e), false);
        this.document.addEventListener('keyup', (e) => this.onKeyUp(e), false);
    }

    onGamepadConnected(e) {
        console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",
            e.gamepad.index, e.gamepad.id,
            e.gamepad.buttons.length, e.gamepad.axes.length);
        this.gamepadConnected = true;
        this.gamepadIndex = e.gamepad.index;
        this.gamepad = e.gamepad;
        console.log(this.gamepad);
    }

    onGamepadDisconnected(e) {
        this.gamepadConnected = false;
    }


    update() {
        if (this.gamepadConnected) {
            const button = this.gamepad.buttons[0];
            let pressed = button == 1.0;
            if (typeof (button) == "object") {
                pressed = button.pressed;
            }

            if (pressed) {
                console.log(pressed);
            }



            this.gamepad.buttons.forEach((button) => {


            });
        }
    }

    onKeyDown(event) {
        if (event.currentTarget.activeElement != this.document.body) {
            return;
        }
        console.log(event.keyCode);
        switch (event.keyCode) {
            case 87: // w
                this.keys.forward = true;
                break;
            case 65: // a
                this.keys.left = true;
                break;
            case 83: // s
                this.keys.backward = true;
                break;
            case 68: // d
                this.keys.right = true;
                break;
            case 32: // SPACE
                this.keys.space = true;
                break;
            case 16: // SHIFT
                this.keys.shift = true;
                break;
            case 39: // RIGHT
                this.keys.turnRight = true;
                break;
            case 37: // LEFT
                this.keys.turnLeft = true;
                break;
        }
    }

    onKeyUp(event) {
        if (event.currentTarget.activeElement != document.body) {
            return;
        }
        switch (event.keyCode) {
            case 87: // w
                this.keys.forward = false;
                break;
            case 65: // a
                this.keys.left = false;
                break;
            case 83: // s
                this.keys.backward = false;
                break;
            case 68: // d
                this.keys.right = false;
                break;
            case 32: // SPACE
                this.keys.space = false;
                break;
            case 16: // SHIFT
                this.keys.shift = false;
                break;
            case 39: // RIGHT
                this.keys.turnRight = false;
                break;
            case 37: // LEFT
                this.keys.turnLeft = false;
                break;
        }
    }
}