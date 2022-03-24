import kaboom from "kaboom"

// intialize context 
kaboom({
        width: 2000,
        height: 800,
        background: [126,175,205],
    });
loadSprite("amongsus","sprites/amongsus.png")
scene("game", () => {

layers([
   "bg",
   "ui",
   "game",
]);

// load assets 

const player = add([
		sprite("amongsus"),
    pos(100, 100),
    area(),
    scale(0.7),
    body(0.5),
    solid(),
    origin("botleft"),
    color(127, 200, 255),
    "game",
    layer("game")
	])

const JUMP_FORCE = 1250;
const SPEED = 400; 
const GRAVITY = 2200

add([
  sprite("DonKeYBaRReL"),
  pos (10000,600),
  area(),
  "obst",
  "game",
  layer("game"),
  scale(0.16)
])
add([
  rect(2000, 100),
  pos(0, 800),
  area(),
  origin("botleft"),
  solid(),
  color(0, 240, 0),
  "game",
  layer("game")
]);



onKeyDown("up", () => {
player.move(0, -JUMP_FORCE)
})

onKeyDown("right", () => {
player.move(SPEED, 0)
})

onKeyDown("left", () => {
player.move(-SPEED, 0)
})

function spawnObst() {
add([
sprite("DonKeYBaRReL"),
area(),
scale(0.37),
pos(width(), height() - 100),
origin("botleft"),
move(LEFT, 240),
color(127, 200, 255),
"danger",
"game",
layer("game")
]);
wait(rand(3.0, 5.0), spawnObst);

}
spawnV();

function spawnV() {
add([
sprite("VbUckS"),
area(),
scale(0.16),
pos(width(), height() - 100),
origin("botleft"),
move(LEFT, 300),
color(127, 200, 255),
"get",
"game",
layer("game")
]);
wait(rand(5.0, 7.0), spawnV);

}
spawnObst();
  
player.onCollide("danger", (danger) => {
    destroy(danger)
go("lose", score)
}); 

let score = 0;
const scoreLabel = add([
text(score),
  	pos(12, -5),
fixed(),
"ui",
layer("ui")
 ])

player.onCollide("get", (get) => {
    destroy(get)
	score++
  scoreLabel.text = score
}); 

});
scene("lose", (score) => {
    add([
      text("You lose!"),
      pos(240, 150),
      origin("center"),
      scale(.5)
      ]);
    
    add([
      text(score),
     pos(240, 200),
       origin("center"),
      scale(.5)
      ]);
  });
go("game");


 // list of components 



  
  
   
