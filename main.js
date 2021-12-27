RwristX = 0;
RwristY = 0;
randomheight = Math.random(1, 500);
randomwidth = Math.random(1, 700);

function preload() {
    Peppalive = loadImage("Peppalivegif.gif");
    Explosion = loadImage("EXPLOSION.gif");
    Peppadead = loadImage("DeadpeppaRIP.jpg");
}

function setup() {
    canvas = createCanvas(700, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenetmodel = ml5.poseNet(video, modelloaded);
    posenetmodel.on("pose", getbodypartlocations);
}

function draw() {
    image(video, 0, 0, 700, 500);
    stroke("purple");
    fill("red");
    image(Peppalive, randomwidth, randomheight, 130, 125);
}


function take_snap() {
    save("download.png");

}

function modelloaded() {
    console.log("Posenet has loaded")
}

function getbodypartlocations(results) {
    if (results.length > 0) {
        console.log(results);
        nosex = results[0].pose.nose.x - 212;
        nosey = results[0].pose.nose.y - 220;
        console.log(nosex);
        console.log(nosey);
    }
}