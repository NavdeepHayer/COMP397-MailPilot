var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // CLOUD CLASS
    var Cloud = (function (_super) {
        __extends(Cloud, _super);
        // CONSTRUCTOR
        function Cloud() {
            _super.call(this, "Astroid");
            this.sound = "Explosion";
            this.reset();
        }
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        Cloud.prototype.update = function () {
            this.rotation += this._rotation;
            this.x -= this._dx;
            this.scaleX = this._scale;
            this.scaleY = this._scale;
            this._checkBounds();
        };
        // Reset position of island to the top
        Cloud.prototype.reset = function () {
            this.y = Math.floor(Math.random() * 450);
            this.x = 660;
            this._dy = Math.floor(Math.random() * 5) + 5;
            this._dx = Math.floor(Math.random() * 4) + 5;
            this._scale = Math.floor(Math.random() * 2) + 1;
            this._rotation = Math.floor(Math.random() * 10) - 5;
            if (this._rotation == 0) {
                this._rotation = Math.floor(Math.random() * 10) - 5;
            }
            if (this._dx == 0) {
                this._dx = Math.floor(Math.random() * 4) + 5;
            }
        };
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        Cloud.prototype._checkBounds = function () {
            // check if island has left the bottom of the screen
            if (this.x < (0)) {
                this.reset();
            }
        };
        return Cloud;
    })(objects.GameObject);
    objects.Cloud = Cloud;
})(objects || (objects = {}));
//# sourceMappingURL=cloud.js.map