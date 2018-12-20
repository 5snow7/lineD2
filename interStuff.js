let inp,inp2,sl
let par;let rad;let p;
let lenS=25;
function inter(){
	inp=createInput();inp.position(650,100);
	inp.class('inpbdd');inp.changed(numOf);
    inp2=createInput();inp2.position(650,200);
	inp2.class('inpbdd');inp2.changed(lenOf);
    rad=createRadio();rad.position(10,10);
	rad.class('bdd');
	rad.option('length',7);
	rad.option('angle',45);
	p=createP('');p.position(650,300);
	p.class('bdd');p.id("parSl");
	sl=createSlider(0,360,0,5);
	sl.parent("parSl");
	//sl.position(650,300);sl.class('bdd');
	//can.mousePressed(incS);
	//par=select("#test");par.position(400,20);
par=createP("testing");par.position(400,10);
	par.class("par");
	}


function numOf(){
num1=floor(inp.value());
}

function lenOf(){
lenS=floor(inp2.value());	
}

function incS(){
	num1++;
}
