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

function modelLoaded()
{
    console.log('Posenet is Initialized');
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);

        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log('Left Wrist X: '+ leftWristX );
        console.log('Left Wrist Y: '+ leftWristY );

        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log('Right Wrist X: '+ rightWristX );
        console.log('Right Wrist Y: '+ rightWristY );
        
    }
}