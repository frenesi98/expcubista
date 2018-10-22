
//<a id="abajo" href="#"> abajo </a>
$("#abajo").hover(function(){
      $("html, body").animate({scrollTop: "1500px"});
});

var cam;

var rx;
var ry, ry2,ry3;
var tamx, tamy;

var pcx;
var pcy;

function setup() {
  createCanvas(1920, 2050);
  cam = createCapture(VIDEO);
  cam.hide();
  cam.size(20,15);
	pixelDensity (1);

  pcx = random (0, 1000);
	pcx2 = random (0, 1000);
	pcx3 = random (500, 1500);
	pcx4 = random (500, 1500);
	pcx5 = random (500, 1700);

  pcy = random (0, 480);
	pcy2 = random (0, 480);
	pcy3 = random (0, 480);
	pcy4 = random (0, 480);
	pcy5 = random (0, 480);

	pcy4 = map (pcy4, 0, 480, 0 , 960);
	pcy5 = map (pcy5, 0, 480, 0 , 1440);

}

function draw() {

  tint (160,90,2);
  image(cam, pcx, pcy, 320, 240);
  image(cam, pcx2, pcy2, 320, 240);
	image(cam, pcx3, pcy3, 320, 240);
	image(cam, pcx4, pcy4, 320, 240);
	image(cam, pcx5, pcy5, 320, 240);
  cam.loadPixels();

  rectMode(CENTER);
	noStroke();
  if (frameCount <= 90){
    rx = (random (0, 1920));
    rx2 = (random (0, 1920));
    ry = (random (-10, 480));
    ry2 = (random (-10, 480));
    ry3 = (random (0, 480));
    ry2 = map (ry2, -10, 480,-10, 960);
    ry3 = map (ry3, -10, 480, -10, 1440);
    tamx = random (60, 100);
    tamy = random (60,100);
  }
    fill (160,89,2);
    rect (rx, ry, tamx, tamy);
    fill (165,70,10);
    rect (rx, ry, tamx, tamy);
    rect (rx2, ry2, tamx, tamy);
  //  rect (rx, ry, tamx, tamy);
    fill (196,108,36);
    rect (rx, ry2, tamx, tamy);
    fill (3,57,21);
    rect (rx, ry3, tamx,tamy);
      //image (video,50,50,640,480);
      //image (video,0,400,160,120 );
      //image (video,0,1000,160,120 );
}
