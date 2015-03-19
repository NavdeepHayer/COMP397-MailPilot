
module objects {
    // PLANE CLASS
    export class Plane extends createjs.Bitmap {
        public width: number;
        public height: number;
        // CONSTRUCTOR
        constructor() {
            super(assetLoader.getResult("SpaceShip"));

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.x = 50;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            createjs.Sound.play("BackGround", {loop: -1});
        }

        // PUBLIC METHODS
        public update() {
            this.y = stage.mouseY

            //console.log("Mouse Y: " + stage.mouseY);
            //console.log("Mouse X: " + stage.mouseX);
        }

    }

} 