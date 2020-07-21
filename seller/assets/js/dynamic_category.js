// JavaScript Document
function cattoscat(){
		
		var x= document.getElementById("catselect").value;
		if(x==1){
		document.getElementById("scateducation").style.display="inline";
			document.getElementById("scatshopping").style.display="none";
		     }
		if(x==2){
		document.getElementById("scateducation").style.display="none";
			document.getElementById("scatshopping").style.display="inline";
		     }
	}