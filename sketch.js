var pokeapi = 'https://pokeapi.co/api/v2/pokemon/';
var input;
var img;


function setup() {
  createCanvas(windowWidth, windowHeight);
  //referenced API Query With User Input by the coding train youtube video
  //(https://www.youtube.com/watch?v=4UoUqnjUC2c&t=778s&ab_channel=TheCodingTrain)
  var button = select('#showme');
  button.mousePressed(getImage);
  input = select('#name');
}

function getImage() {
  var url = pokeapi + input.value()
  loadJSON(url, gotData);
}

function gotData(data) {
  var imageUrl = data.sprites.front_default;
  //referenced loadImage from p5.js library (https://p5js.org/reference/#/p5/loadImage)
  img = loadImage(imageUrl, draw);
}

function draw() {
  clear();
  image(img, 0, 0, 500, 500); 
}

