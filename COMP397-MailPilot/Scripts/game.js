/// <reference path="typings/createjs-lib/createjs-lib.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />
/// <reference path="typings/stats/stats.d.ts" />
/// <reference path="objects/gameobject.ts" />
/// <reference path="objects/plane.ts" />
/// <reference path="objects/island.ts" />
/// <reference path="objects/cloud.ts" />
/// <reference path="objects/ocean.ts" />
// Global game Variables
var canvas;
var stage;
var assetLoader;
var game;
var stats = new Stats();
// Game Objects 
var plane;
var island;
var clouds = [];
var ocean;
var manifest = [
    { id: "cloud", src: "assets/images/cloud.png" },
    { id: "island", src: "assets/images/island.png" },
    { id: "ocean", src: "assets/images/ocean.gif" },
    { id: "plane", src: "assets/images/plane.png" },
    { id: "engine", src: "assets/audio/engine.ogg" },
    { id: "yay", src: "assets/audio/yay.ogg" },
    { id: "thunder", src: "assets/audio/thunder.ogg" }
];
function Preload() {
    assetLoader = new createjs.LoadQueue(); // create a new preloader
    assetLoader.installPlugin(createjs.Sound); // need plugin for sounds
    assetLoader.on("complete", init, this); // when assets finished preloading - then init function
    assetLoader.loadManifest(manifest);
}
function init() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20); // Enable mouse events
    createjs.Ticker.setFPS(60); // 60 frames per second
    createjs.Ticker.addEventListener("tick", gameLoop);
    setupStats();
    main();
}
// UTILITY METHODS
// DISTANCE CHECKING METHOD
function distance(p1, p2) {
    return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
}
// CHECK COLLISION METHOD
function checkCollision(collider) {
    var planePosition = new createjs.Point(plane.x, plane.y);
    var cloudPosition = new createjs.Point(collider.x, collider.y);
    var theDistance = distance(planePosition, cloudPosition);
    if (theDistance < ((plane.height * 0.5) + (collider.height * 0.5))) {
        if (collider.isColliding != true) {
            createjs.Sound.play(collider.sound);
        }
        collider.isColliding = true;
    }
    else {
        collider.isColliding = false;
    }
}
function setupStats() {
    stats.setMode(0);
    // align top-left
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '650px';
    stats.domElement.style.top = '440px';
    document.body.appendChild(stats.domElement);
}
function gameLoop() {
    stats.begin();
    ocean.update();
    island.update();
    plane.update();
    for (var cloud = 2; cloud >= 0; cloud--) {
        clouds[cloud].update();
        checkCollision(clouds[cloud]);
    }
    checkCollision(island);
    stage.update(); // Refreshes our stage
    stats.end();
}
// Our Game Kicks off in here
function main() {
    // Instantiate Game Container
    game = new createjs.Container();
    //Ocean object
    ocean = new objects.Ocean();
    game.addChild(ocean);
    //Island object
    island = new objects.Island();
    game.addChild(island);
    //Plane object
    plane = new objects.Plane();
    game.addChild(plane);
    for (var cloud = 2; cloud >= 0; cloud--) {
        clouds[cloud] = new objects.Cloud();
        game.addChild(clouds[cloud]);
    }
    // Add Game Container to Stage
    stage.addChild(game);
}
//# sourceMappingURL=game.js.map