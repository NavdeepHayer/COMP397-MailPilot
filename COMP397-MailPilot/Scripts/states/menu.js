/// <reference path="../constants.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/cloud.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/scoreboard.ts" />
var states;
(function (states) {
    // MENU STATE CLASS
    var Menu = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function Menu() {
            this.play = false;
            // Instantiate Game Container
            this.game = new createjs.Container();
            //addedSound TO the mainMenu
            createjs.Sound.play("MainMenu", { loop: -1 });
            //Ocean object
            this.ocean = new objects.Ocean();
            this.game.addChild(this.ocean);
            //Game Over Label
            this.Title = new objects.Label(320, 40, "Space Rescue");
            this.Title.font = "60px Consolas";
            this.Title.regX = this.Title.getMeasuredWidth() * 0.5;
            this.Title.regY = this.Title.getMeasuredLineHeight() * 0.5;
            this.game.addChild(this.Title);
            //Play Button
            this.playButton = new objects.Button(320, 400, "playButton");
            this.playButton.on("click", this.playClicked, this);
            this.game.addChild(this.playButton);
            //Adding Menu Astroid to screen
            this.MenuAst = new objects.Button(150, 150, "Astroid");
            this.game.addChild(this.MenuAst);
            //Adding Text for astroid
            this.AstText = new objects.Label(360, 150, " - Avoid These");
            this.AstText.regX = this.AstText.getMeasuredWidth() * 0.5;
            this.AstText.regY = this.AstText.getMeasuredLineHeight() * 0.5;
            this.AstText.font = "25px Consolas";
            this.game.addChild(this.AstText);
            //Adding Menu Astrunaunt to screen
            this.MenuAstra = new objects.Button(150, 300, "Astronaut");
            this.game.addChild(this.MenuAstra);
            //Adding text for Astrunaunt 
            this.SaveText = new objects.Label(360, 300, " - Save Them");
            this.SaveText.regX = this.SaveText.getMeasuredWidth() * 0.5;
            this.SaveText.regY = this.SaveText.getMeasuredLineHeight() * 0.5;
            this.SaveText.font = "25px Consolas";
            this.game.addChild(this.SaveText);
            // Add Game Container to Stage
            stage.addChild(this.game);
        } // Constructor
        Menu.prototype.playClicked = function () {
            this.play = true;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        Menu.prototype.update = function () {
            this.ocean.update();
            this.MenuAst.rotation += 5;
            this.MenuAstra.rotation -= 5;
            if (this.play) {
                createjs.Sound.stop();
                this.game.removeAllChildren();
                stage.removeChild(this.game);
                currentState = constants.PLAY_STATE;
                stateChanged = true;
            }
            stage.update(); // Refreshes our stage
        }; // Update Method
        return Menu;
    })();
    states.Menu = Menu; // Menu Class
})(states || (states = {})); // States Module
//# sourceMappingURL=menu.js.map