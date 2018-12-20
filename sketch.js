let can;let t;let t1;
let tim;let num1=8;
let angleR=0;
function setup() {
inter();//do not use
can=createCanvas(500,400);
can.position(100,50);can.class("bdd");
can.mousePressed(incS);//do not use
t=new logo(400,200,0);
tim=millis();//do not use
t1=new logo(20,400,-90);
rad.changed(action);
}
let angleld=30;
function draw() {
background(250,0,0);
t.set1(350,300,0);
ld(15,angleld,num1);
text(num1,100,20);//do not use
t.set1(250,30,sl.value());//do not use
polyL(lenS,num1);//do not use
t1.set1(20,300,-90);
sqs(t1,200,5);
text(an,100,50);
t1.set1(400,150,0);
polyStars(t1,4,5);

}

function action(){
if(rad.value()==45){
angleld=rad.value();
}	
if(rad.value()==7){
num1=rad.value();
}	


	
}
function incS(){
	num1++;
}




//function mousePressed(){
//num++;	
//}