module objects {
    // ISLAND CLASS
    export class Island extends objects.GameObject{

        // CONSTRUCTOR
        constructor() {
            super("island");
            this.sound = "yay";

            this.reset();
        }

        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        public update() {
            this.x -= this._dy;
            this.rotation += this._rotation;
            this._checkBounds();
            
        }

        // Reset position of island to the top
        public reset() {
            this.y = Math.floor(Math.random() * 440);
            this.x = 640;
            this._dy = Math.floor(Math.random() * 5) + 5;
            this._rotation = Math.floor(Math.random() * 10) - 5;
            if (this._rotation == 0) {
                this._rotation = Math.floor(Math.random() * 10) - 5;
            }

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