var arr=new Array();
for(var i=0; i<4; i++)
{
	arr[i]='images/subscribe/'+(i+1)+'.jpg';
}
var t=0;
function next()
{
	 document.getElementById("slide1").src= arr[t++];
	if(t==4)
	{
	t=0;
	}
}
setInterval('next()', 3000);

var arr1=new Array();
var u=5;
for(var a=0; a<4; a++)
{
	arr1[a]='images/subscribe/'+u+'.jpg';
	u++;
}
var t1=0;
function next1()
{
	 document.getElementById("slide2").src= arr1[t1++];
	if(t1==4)
	{
	t1=0;
	}
}
setInterval('next1()', 3000);

var arr2=new Array();
var v=9;
for(var m=0; m<4; m++)
{
	arr2[m]='images/subscribe/'+v+'.jpg';
	v++;
}
var t2=0;
function next2()
{
	 document.getElementById("slide3").src= arr2[t2++];
	if(t2==4)
	{
	t2=0;
	}
}
setInterval('next2()', 3000);

