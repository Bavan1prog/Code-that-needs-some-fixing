

function preload()
{

}

function setup(){
createCanvas(800,700);
// Ground
ground = new Ground(600,height,1200,20);


}

function draw(){
ground.display();

drawSprites();
}
