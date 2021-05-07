canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
var mouseEvent="empty";
var last_position_of_x,last_position_of_y;
color= "black";
widthOfLine= 1;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e) {
    color=document.getElementById("color").value;
    widthOfLine=document.getElementById("widthOfLine").value;
    mouseEvent= "mouseDown";
    
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e) {
    mouseEvent= "mouseUp";
    
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e) {
    mouseEvent= "mouseleave";
    
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e) {
    current_position_of_x= e.clientX - canvas.offsetLeft;
    current_position_of_y= e.clientY - canvas.offsetTop;
    if(mouseEvent=="mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle= color;
        ctx.lineWidth= widthOfLine;
        ctx.moveTo(last_position_of_x,last_position_of_y);
        ctx.lineTo(current_position_of_x,current_position_of_y);
        ctx.stroke();
    }
    last_position_of_x= current_position_of_x;
    last_position_of_y= current_position_of_y;
}
var width= screen.width;
    newwidth=screen.width-70;
    newheight=screen.height-300;
    if(width<992){
        document.getElementById("myCanvas").width=newwidth;
        document.getElementById("myCanvas").height=newheight;
        document.body.style.overflow="hidden";
    }

    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
        //Addictonal Activity start
        //Addictonal Activity ends
        last_position_of_x= e.touches[0].clientX-canvas.offsetLeft;
        last_position_of_y= e.touches[0].clientY-canvas.offsetTop;
    }

    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {

         current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth =widthOfLine;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();
        

        last_position_of_x = current_position_of_touch_x; 
        last_position_of_y = current_position_of_touch_y;
    }
function clear() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); 
}