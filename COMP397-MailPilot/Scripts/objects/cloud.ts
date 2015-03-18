module objects {
    // CLOUD CLASS
    export class Cloud extends objects.GameObject {

        // CONSTRUCTOR
        constructor() {
            super("cloud");
            this.sound = "thunder";
            this.reset();
        }

        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        public update() {
            this.rotation += 5;
            this.x -= this._dx;
            this._checkBounds();
        }

        // Reset position of island to the top
        public reset() {

            this.y = Math.floor(Math.random() * 450);
            this.x = 660;
            this._dy = Math.floor(Math.random() * 5) + 5;
            this._dx = Math.floor(Math.random() * 4) + 5;
        }

        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        private _checkBounds() {
            // check if island has left the bottom of the screen
            if (this.x < (0)) {
                this.reset();
            }
        }

    }

}  