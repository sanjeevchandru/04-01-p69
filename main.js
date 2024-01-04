document.write("33.to check whether two numbers are in the range 40..60 or 70..100 inclusive."+"<br>");
function test33(x,y){
    if((x>=40 && x<=60 && y>=40 && y<=60) || (x>=70 && x<=100 && y>=70 && y<=100)){
        return true;
    }
    return false;
}
document.write("The numbers are :20,50 ,Ans:"+test33(20,50)+"<br>");
document.write("The numbers are :20,50 ,Ans:"+test33(70,80)+"<br><br>");