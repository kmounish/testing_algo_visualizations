
values = []
function setup(){
    createCanvas(1900,920)
    for(var x =0;x<width/10;x++){
        values.push(floor(random(height)))
    }
}

index =0
index_max = 2
function draw(){
    // loadPixels()
    background(51)
    frameRate(30)
    algo(index,index_max)
    index_max +=2
    index +=2
    if (index==values.length){
        createNew()
    }
}

function createNew(){
    values1 = []
    for(var x =0;x<width/10;x++){
        values1.push(floor(random(height)))
    }
    values = values1
    index =0
    index_max = 2
}
function algo(min,x_lim){

    for(var x =min;x<x_lim;x++){
        for(var y =x;y<values.length;y++){
            if(values[y]<values[x]){
                temp = values[y]
                values[y] = values[x]
                values[x] = temp 
                
            }
            
        }
        draw1(x)
    }
   
}
function draw1(val){
    for(var x =0;x<values.length;x++){
        if(val==x){
            fill("orange")
        }
        else{
            fill("red")
        }
        stroke('pink')
        
        rect(x*10 , height, 10, -values[x],60)
    }
}