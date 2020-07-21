// JavaScript Document
function product_validation()
{
	var img1 =  document.forms["myForm"]["img1"].value;
	var img2 =  document.forms["myForm"]["img2"].value;
	var cat =  document.forms["myForm"]["cat"].value;
	var brand =  document.forms["myForm"]["brand"].value;
	var desc =  document.forms["myForm"]["desc"].value;
if(cat==0)
{   
	    alert("Please select Category");
		return false;
}
/*if(brand==0)
{   
	    alert("Please select Brand");
		return false;
}*/
if(desc.length<=20)
	{
	    alert("Description Cannot less then 20 charaater");
		return false;		
	}
if(img1==img2)
{   
	    alert("Same Image Not Allowed");
		return false;
}
else {
	return true;
}
}