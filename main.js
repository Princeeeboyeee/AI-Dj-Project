song="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;


function preload(){
    song=loadSound();
}

function setup(){
canvas=createCanvas(800,600);
canvas.center();
video=createCapture(VIDEO);
video.hide();
poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0,0, 800, 600);
}
