/*var ore = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];*/
var sound = ['myEight', 'myNine', 'myTen', 'myEleven', 'myTwelve', 'myThirteen', 'myFourteen', 'myFifteen', 'mySixteen','mySeventeen', 'myEighteen', 'myNineteen'];

var myEight;
var myNine;
var myTen;
var myElven;
var myTwelve;
var myThirteen;
var myFourteen;
var myFifteen;
var mySixteen;
var mySeventeen;
var myEighteen;
var myNineteen;

function preload () {
  myEight = loadSound("./sound/08_Amp.mp3");
  myNine = loadSound("./sound/09_Amp.mp3");
  myTen = loadSound("./sound/10_Amp.mp3");
  myElven = loadSound("./sound/11_Amp.mp3");
  myTwelve = loadSound("./sound/12_Amp.mp3");
  myThirteen = loadSound("./sound/13_Amp.mp3");
  myFourteen = loadSound("./sound/14_Amp.mp3");
  myFifteen = loadSound("./sound/15_Amp.mp3");
  mySixteen = loadSound("./sound/16_Amp.mp3");
  mySeventeen = loadSound("./sound/17_Amp.mp3");
  myEighteen = loadSound("./sound/18_Amp.mp3");
  myNineteen = loadSound("./sound/19_Amp.mp3");

  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(1);
  
}

function draw() {

var h = hour();
var m = minute();
var s = second();

//partenza tracce
  if (h == 18 && m === 20 && s === 0) {
			myEight.play();
	}
	if (h == 18 && m === 21 && s === 0) {
			myNine.play();
	}
	if (h == 18 && m === 22 && s === 0) {
			myTen.play();
	}
	if (h == 18 && m === 32 && s === 0) {
			myEleven.play();
	}
	if (h == 18 && m === 24 && s === 0) {
			myTwelve.play();
	}
	if (h == 18 && m === 25 && s === 0) {
			myThirteen.play();
	}
	if (h == 18 && m === 26 && s === 0) {
			myFourteen.play();
	}
	if (h == 18 && m === 27 && s === 0) {
			myFifteen.play();
	}
	if (h == 18 && m === 28 && s === 0) {
			mySixteen.play();
	}
	if (h == 18 && m === 29 && s === 0) {
			mySeventeen.play();
	}
	if (h == 18 && m === 30 && s === 0) {
			myEighteen.play();
	}
	if (h == 18 && m === 31 && s === 0) {
			myNineteen.play();
	}
	

// colore sfondo [lista sound]
if (myFifteen.isPlaying() === true) {
        background('lightGray');
}
else {
		  background('white');
	}


// testo

  textFont('Roboto Mono');
  textAlign(LEFT);
  textSize(10);
  fill('black');
  text('Cyber Attacks [Sonification Project]', 50, 50);
  
  textFont('Roboto Mono');
  textAlign(LEFT);
  textSize(10);
  fill('red');
  text('Test [01]', 50, 70);
  fill('black');
  text('Scenario [01]', 50, 90);
  
  textFont('Roboto Mono');
  textAlign(LEFT);
  textSize(10);
  fill('lightGray');
  text('Link to Google Format', 50, 200);


// orologio
if (s < 10) { 
    s = '0'+ s;}
if (m < 10) { 
    m = '0'+ m;}
if (h < 10) { 
    h = '0'+ h;}

textFont('Roboto Mono');    
textSize(10);
fill('black');
text("time // " + h + ":" + m + ":" + s, 50, 120);
 







/*for (var i = time[0]; i <= time[2]; i++) {
  var t = sound[i-time[0]]
}*/

}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}