var form, passenger;
var database;

function setup() {
  createCanvas(800,800);
form=new Form();
database = firebase.database();
}

function draw() {
  background(255,255,255);  

form.display();
  
}

