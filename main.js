img = "";
status = "";
objects = "";

function preload() {
    img = loadImage("IMG20210706203352.jpg");
    loadImage("20210706203426.jpg");
    loadImage("20210706203515.jpg");
    loadImage("20210706203559.jpg");
}

function setup() {
    canvas = createCanvas(640,420);
    canvas.center();
    object_detector = ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw() {
  image(img,0,0,640,420);
  if(status != "") {
      for(i = 0,  i < objects.length; i++) {
          document.getElementById("status").innerHTML = "Status : Object Detected";
          fill("#ff0000");
          percent = floor(objects[i].confidence * 100);
          text(objects[i].label + " " + percent + "%" , objects[i].x + 15 , objects[i].y + 15);
          noFill();
          stroke("#ff0000");
          rect(objects[i].x , objects[i].y , objects[i].width , object[i].height);
      }
  }
}

function modelloaded(
    console.log("Model is Loaded");
    status = true;
    object_detector.detect(img,gotRESULT);
)

function gotRESULT(error,results) {
    if(error) {
        console.error(error);

    }

    else{
        console.log(results);
        objects = results;
    }
}

