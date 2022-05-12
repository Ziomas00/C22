const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase, playerArcher;
var baseimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  //criar corpo da base do jogador
  var baseoptions = {
    isStatic:true
  }
  playerBase = Bodies.rectangle(300, 600, 200, 50, baseoptions)
  World.add(world, playerBase)
  //criar corpo do jogador
  var playeroptions = {
    isStatic:true
  }
  playerArcher = Bodies.rectangle(350, 405, 80, 200, playeroptions)
  World.add(world, playerArcher)



}

function draw() {
  background(backgroundImg);

  //exibir a imagem do jogador usando a função image()
  image(playerimage, playerArcher.position.x, playerArcher.position.y, 80, 200)

  //exibir a imagem da base do jogador usando a função image()
  image(baseimage, playerBase.position.x, playerBase.position.y, 200, 50)

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("ARQUEIRO ÉPICO", width / 2, 100);
}
