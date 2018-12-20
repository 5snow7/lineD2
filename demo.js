let an;

function sqs(t,len,len1){
 an=Math.atan(len1/(len-len1));
an=180*an/PI;
while(len>5){
t.fd(len);t.rt(90);	
t.fd(len);t.rt(90);	
t.fd(len);t.rt(90);	
t.fd(len);t.rt(90);
t.fd(len1);t.rt(an);	
len=len-len1;
 an=atan(len1/len);
an=180*an/PI;
}
	
}
function polyStars(t,len,n){
for(let j=0;j<20;j++){
t.fd(len*j);t.rt(360/n);
}	
}
	