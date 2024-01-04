LipX = 0;
LipY = 0;

function preload() {
    lipstick = loadImage('https://i.postimg.cc/PxFvYgkv/l1.png')
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function draw() {
image(video, 0, 0, 300, 300);
image(lipstick, LipX-20, LipY+25, 50, 50);
}

function take_snapshot() {
    save('myFilterImage.png');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        LipX = results[0].pose.nose.x;
        LipY = results[0].pose.nose.y
        console.log("Lip x = " + LipX);
        console.log("Lip y = " + LipY);
    }
}


