
//global variable to contain the balls ;)
var homie = [];

function setup(){
    //so we can choose where the canvas is placed.
    const myCanvas = createCanvas(windowWidth,400);
    //canvas is drawn at the div called "canvasDiv"    
    myCanvas.parent('canvasDiv');

    background(0,255,0);

    //randomly generates either -1 or 1.
    //console.log(random(-1,1) >= 0 ? 1 : -1);

    for(l = 0; l<width/floor(100); l++)
    //constructor (x, y, size)
    homie[l] = new bold(round(random(1,width-1)),round(random(0,height-1)),random(20,80));
    
    
}

function draw(){
    background(200);

    for(i = 0; i < homie.length; i++){
    homie[i].move();
    homie[i].display();
    }
}

function mouseClicked(){
    homie[homie.length] = new bold(mouseX,mouseY,random(20,80));
}

class bold {
    constructor(x,y,size){
        this.x = x;
        this.y = y;
        this.size = size; 
        this.directionx = random(-1,1) >= 0 ? 1/(size/50)*random(.5,1.5) : -1/(size/50)*random(.5,1.5);
        this.directiony = random(-1,1) >= 0 ? 1/(size/50)*random(.5,1.5) : -1/(size/50)*random(.5,1.5);
        this.col = random(0,100);
    }
    
    move(){
        if (this.x <= 1 && this.directionx<0|| this.x >= width-1 && this.directionx>0) this.directionx*=-1;
        if (this.y <= 1 && this.directiony<0|| this.y >= height-1 && this.directiony>0) this.directiony*=-1;

        this.x+=this.directionx;
        this.y+=this.directiony;
    }

    display(){
    fill(this.col);
    ellipse(this.x,this.y,this.size);


    }
}