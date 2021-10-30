var canvas=new fabric.Canvas("myCanvas");
var player_y=250;
var player_x=250;
var block_width=30;
var block_height=30;
var player_object="";
var block_object="";

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_object=Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_object);
    });
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e){
    keypressed=e.keyCode;
    if(e.shiftKey==true && keypressed=="80"){
    block_width=block_width+10;
    block_height=block_height+10;
    document.getElementById("current_width").innerHTML=block_width;
    console.log(block_width);
    document.getElementById("current_height").innerHTML=block_height;
    console.log(block_height);
    }
    if(e.shiftKey==true && keypressed=="77"){
        block_width=block_width-10;
        block_height=block_height-10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
        }
    
     if(keypressed=="40"){
            down();
            console.log("down");
        }
    if(keypressed=="38"){
            up();
            console.log("up");
        }
    if(keypressed=="37"){
            left();
            console.log("left");
        }
    if(keypressed=="39"){
            right();
            console.log("right");
        }
    if(keypressed=="65"){
            new_image("captain_america_left_hand.png");
            console.log("a");
        }
    if(keypressed=="66"){
            new_image("hulk_face.png");
            console.log("b");
        }
    if(keypressed=="67"){
            new_image("hulk_left_hand.png");
            console.log("c");
        }
    if(keypressed=="68"){
            new_image("hulk_legs.png");
            console.log("d");
        }
    if(keypressed=="69"){
            new_image("hulk_right_hand.png");
            console.log("e");
        }
    if(keypressed=="70"){
            new_image("hulk_body.png");
            console.log("f");
        }
    if(keypressed=="71"){
            new_image("ironman_body.png");
            console.log("g");
        }
    if(keypressed=="72"){
            new_image("ironman_face.png");
            console.log("h");
        }
    if(keypressed=="73"){
            new_image("ironman_left_hand.png");
            console.log("i");
        }
    if(keypressed=="74"){
            new_image("ironman_right_hand.png");
            console.log("j");
        }
    if(keypressed=="75"){
            new_image("ironman_legs.png");
            console.log("k");
        }
    if(keypressed=="76"){
            new_image("spiderman_body.png");
            console.log("l");
        }
    if(keypressed=="85"){
            new_image("spiderman_face.png");
            console.log("u");
        }
    if(keypressed=="78"){
            new_image("spiderman_left_hand.png");
            console.log("n");
        }
    if(keypressed=="79"){
            new_image("spiderman_legs.png");
            console.log("o");
        }
    if(keypressed=="84"){
            new_image("spiderman_right_hand.png");
            console.log("t");
        }
    if(keypressed=="81"){
            new_image("thor_face.png");
            console.log("q");
        }
    if(keypressed=="82"){
            new_image("thor_left_hand.png");
            console.log("r");
        }
    if(keypressed=="83"){
            new_image("thor_right_hand.png");
            console.log("s");
        }
}
function up(){
    if(player_y>=0){
    player_y=player_y-block_height;
    canvas.remove(player_object);
    player_update();
    }
    
}
function down(){
    if(player_y<=400){
    player_y=player_y+block_height;
    canvas.remove(player_object);
    player_update();
    }
}
function left(){
    if(player_x>=0){
    player_x=player_x-block_width;
    canvas.remove(player_object);
    player_update();
    }
}
function right(){
    if(player_x<=850){
    player_x=player_x+block_width;
    canvas.remove(player_object);
    player_update();
    }
}