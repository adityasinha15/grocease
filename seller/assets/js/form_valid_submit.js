function submit_validation()
{
	var b_name =  document.forms["myForm"]["b_name"].value.length;
	var contact =  document.forms["myForm"]["contact"].value;
	//var bwebsite =  document.forms["myForm"]["bwebsite"].value;
	var cat =  document.forms["myForm"]["cat"].value;
	var scat4 =  document.forms["myForm"]["scat4"].value;
	var scat1 =  document.forms["myForm"]["scat1"].value;
	var scat2 =  document.forms["myForm"]["scat2"].value;
	var scat3 =  document.forms["myForm"]["scat3"].value;
	var desc =  document.forms["myForm"]["desc"].value;
	var shop_no =  document.forms["myForm"]["shop_no"].value;
	var block =  document.forms["myForm"]["block"].value;
	var sector =  document.forms["myForm"]["sector"].value;
	var area =  document.forms["myForm"]["area"].value;
	var img1 =  document.forms["myForm"]["img1"].value;
	var img2 =  document.forms["myForm"]["img2"].value;
	var img3 =  document.forms["myForm"]["img3"].value;
	var img4 =  document.forms["myForm"]["img4"].value;
	var img5 =  document.forms["myForm"]["img5"].value;

if(b_name <= 3)
{   
	    alert("Business name must be atleast 4 characters long");
		return false;
}
if(contact.length!=10)
{
		  alert("Please enter valid contact number ");
		  return false;
}
if(desc.length < 150)
{
		   alert("Description must be atleast 150 characters long");
		   return false;
}
if(shop_no.length >= 7)
{
		   alert("Shop no cannot exceed 7 characters");
		   return false;
}
if(block.length >= 11)
{
		   alert("Block cannot exceed 10 characters");
		   return false;
}
if(sector.length >=4)
{
		   alert("Sector cannot exceed 3 characters");
		   return false;
}
if(cat == 0)
{
		   alert("Category cannot be empty");
		   return false;
}
if(scat1 == 0 && scat2==0 && scat3 == 0 && scat4==0)
{
		   alert("Sub-category cannot be empty");
		   return false;
}
if(area == 0)
{
		   alert("Area cannot be empty");
		   return false;
}
if(img1==img2 || img1==img3 || img1==img4 || img1==img5)
{
		   alert("Same image not allowed");
		   return false;	
}
if(img2==img1 || img2==img3 || img2==img4 || img2==img5)
{
		   alert("Same image not allowed");
		   return false;	
}
if(img3==img1 || img3==img2 || img3==img4 || img3==img5)
{
		   alert("Same image not allowed");
		   return false;	
}
if(img4!=null)
 {
if(img4==img1 || img4==img3 || img4==img2 || img4==img5)
{
		   alert("Same image not allowed");
		   return false;	
}
if(img5==img1 || img5==img3 || img5==img2 || img5==img4)
{
		   alert("Same image not allowed");
		   return false;	
}
}
return true;	

}



