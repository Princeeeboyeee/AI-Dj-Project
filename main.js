enemy_dragons_song="";
harry_potter_song="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
scoreleftwrist=0;
scorerightwrist=0;
song_harrypottter="";
song_enemy="";


function preload(){
    enemy_dragons_song=loadSound("Enemy.mp3");
    harry_potter_song=loadSound("Harry potter.mp3");
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

    fill("#FF0000");
    stroke("#32CD32");

    image(video, 0,0, 800, 600);

    enemy_dragons_song=enemy_song.isPlaying();
    console.log(enemy_dragons_song);

    if(scoreleftwrist > 0.2)
    {
        fill("#32CD32");
        stroke("FF0000");

        circle(leftWristX, leftWristY, 40);
        harry_potter_song.stop();
        if(enemy_song == false)
        {
            enemy_song.play();
            document.getElementById("song_id").innerHTML= "Song Name : Enemy"
        }
    }

    harry_potter_theme_song=harry_potter_song.isPlaying();
    console.log(harry_potter_song);

    if(scorerightwrist > 0.2)
    {
        
        circle(leftWristX, leftWristY, 40);
        enemy_song.stop();
        if(harry_potter_song == false)
        {
            harry_potter_song.play();
            document.getElementById("song_id").innerHTML= "Song Name : Harry Potter Theme Song"
        }
    }
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

        scoreleftwrist=results[0].pose.keypoints[9].score;
        console.log('Left Wrist Score:' + scoreleftwrist);

        scorerightwrist=results[0].pose.keypoints[10].score;
        console.log('Right Wrist Score:' + scorerightwrist);

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