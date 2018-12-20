let x=[];let y=[];
function ld(num,an,len){
	
	for(let j=0;j<num;j=j+1){
		t.fd(len);x[j]=t.xpos();y[j]=t.ypos();
  	}
	t.bk(num*len);t.lt(an);
	for(let j=num;j<2*num;j=j+1){
	t.fd(len);x[j]=t.xpos();y[j]=t.ypos();	
	}
	t.bk(num*len);t.rt(an);
	for(let j=0;j<num;j=j+1){
	line(x[2*num-1-j],y[2*num-1- j],x[j],y[j]);	
	}
}

function polyL(side,n){
	for(let j=0;j<n;j=j+1){
	t.fd(side);x[j]=t.xpos();y[j]=t.ypos();	
	t.rt(360/n);
	}
	
	for(let j=0;j<n;j=j+1){
	for(let k=0;k<n;k++){
     line(x[j],y[j],x[k],y[k]);
	}	
	}
}