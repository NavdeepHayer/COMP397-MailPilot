﻿module objects {
    // ISLAND CLASS
    export class Island extends objects.GameObject{

        // CONSTRUCTOR
        constructor() {
            super("island");
            this.sound = "yay";
            this._dy = 5;

            this.reset();
        }

        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        public update() {
            this.x -= this._dy;
            this._checkBounds();
        }

        // Reset position of island to the top
        public reset() {
            this.y = Math.floor(Math.random() * 440);
            this.x = 640;

        }

        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        private _checkBounds() {
            // check if island has left the right of the screen
            if (this.x <= (0)) {
                this.reset();
            }
        }

    }

} 