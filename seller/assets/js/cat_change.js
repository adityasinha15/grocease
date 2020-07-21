// JavaScript Document
	function cattoscat(){
		var x= document.getElementById("catselect").value;
		if(x==1){
		document.getElementById("scateducation").style.display="inline";
		document.getElementById("scatshopping").style.display="none";
		document.getElementById("scatrealestate").style.display="none";
		document.getElementById("scatvehicle").style.display="none";
         close_all_ssc();
		 close_all_sssc();
		all_sc_value();
		        }
		if(x==2){
		document.getElementById("scateducation").style.display="none";
		document.getElementById("scatshopping").style.display="inline";
		document.getElementById("scatrealestate").style.display="none";
		document.getElementById("scatvehicle").style.display="none";
         close_all_ssc();
		 close_all_sssc();
		 all_sc_value();
		        }
		if(x==3){
		document.getElementById("scateducation").style.display="none";
		document.getElementById("scatshopping").style.display="none";
		document.getElementById("scatrealestate").style.display="inline";
		document.getElementById("scatvehicle").style.display="none";
         close_all_ssc();
		 close_all_sssc();
		 all_sc_value();
                }
		if(x==4){
		document.getElementById("scateducation").style.display="none";
		document.getElementById("scatshopping").style.display="none";
		document.getElementById("scatrealestate").style.display="none";
		document.getElementById("scatvehicle").style.display="inline";
         close_all_ssc();
		 close_all_sssc();
		 all_sc_value();
                }
	}
function scattosscat(){
		var z= document.getElementById("scateducation").value;
	    open_all_ssc();
	    close_all_sssc();
		if(z==0){
		document.getElementById("sstutioncoaching").style.display="none";
		document.getElementById("sstraininginstitute").style.display="none";
		document.getElementById("sscolleges").style.display="none";
		document.getElementById("ssschools").style.display="none";
		document.getElementById("ssspoken").style.display="none";
		document.getElementById("ssmusic").style.display="none";
		document.getElementById("ssdance").style.display="none";			
		 all_ssc_value();			
		}
	    if(z==1){
		document.getElementById("sstutioncoaching").style.display="inline";
		document.getElementById("sstraininginstitute").style.display="none";
		document.getElementById("sscolleges").style.display="none";
		document.getElementById("ssschools").style.display="none";
		document.getElementById("ssspoken").style.display="none";
		document.getElementById("ssmusic").style.display="none";
		document.getElementById("ssdance").style.display="none";
		 all_ssc_value();
		        }
		if(z==2){
		document.getElementById("sstutioncoaching").style.display="none";
		document.getElementById("sstraininginstitute").style.display="inline";
		document.getElementById("sscolleges").style.display="none";
		document.getElementById("ssschools").style.display="none";
		document.getElementById("ssspoken").style.display="none";
		document.getElementById("ssmusic").style.display="none";
		document.getElementById("ssdance").style.display="none";
		 all_ssc_value();
		        }
		if(z==3){
		document.getElementById("sstutioncoaching").style.display="none";
		document.getElementById("sstraininginstitute").style.display="none";
		document.getElementById("sscolleges").style.display="inline";
		document.getElementById("ssschools").style.display="none";
		document.getElementById("ssspoken").style.display="none";
		document.getElementById("ssmusic").style.display="none";
		document.getElementById("ssdance").style.display="none";
		 all_ssc_value();
		        }	
		if(z==4){
		document.getElementById("sstutioncoaching").style.display="none";
		document.getElementById("sstraininginstitute").style.display="none";
		document.getElementById("sscolleges").style.display="none";
		document.getElementById("ssschools").style.display="inline";
		document.getElementById("ssspoken").style.display="none";
		document.getElementById("ssmusic").style.display="none";
		document.getElementById("ssdance").style.display="none";
		 all_ssc_value();
		        }
		if(z==6){
		document.getElementById("sstutioncoaching").style.display="none";
		document.getElementById("sstraininginstitute").style.display="none";
		document.getElementById("sscolleges").style.display="none";
		document.getElementById("ssschools").style.display="none";
		document.getElementById("ssspoken").style.display="inline";
		document.getElementById("ssmusic").style.display="none";
		document.getElementById("ssdance").style.display="none";
		 all_ssc_value();
		        }
		if(z==7){
		document.getElementById("sstutioncoaching").style.display="none";
		document.getElementById("sstraininginstitute").style.display="none";
		document.getElementById("sscolleges").style.display="none";
		document.getElementById("ssschools").style.display="none";
		document.getElementById("ssspoken").style.display="none";
		document.getElementById("ssmusic").style.display="inline";
		document.getElementById("ssdance").style.display="none";
		 all_ssc_value();
		        }
		if(z==8){
		document.getElementById("sstutioncoaching").style.display="none";
		document.getElementById("sstraininginstitute").style.display="none";
		document.getElementById("sscolleges").style.display="none";
		document.getElementById("ssschools").style.display="none";
		document.getElementById("ssspoken").style.display="none";
		document.getElementById("ssmusic").style.display="none";
		document.getElementById("ssdance").style.display="inline";
		 all_ssc_value();
		        }
}
/*function sscattossscat(){
		var w= document.getElementById("sstutioncoaching").value;
	    var ti= document.getElementById("sstraininginstitute").value;
	    document.getElementById("divssscat").style.display="inline";
		if(w==10){
		document.getElementById("sss9-12").style.display="inline";
		document.getElementById("sssprogramminglanguage").style.display="none";
		document.getElementById("sssengineeringdesign").style.display="none";
		document.getElementById("sssmultimediadesign").style.display="none";
		document.getElementById("sssmobiledevelopment").style.display="none";
		document.getElementById("ssscomputernetwork").style.display="none";
		document.getElementById("sssdatabasetraining").style.display="none";
		document.getElementById("sssadministrationtraining").style.display="none";
		        }
		if(ti=='programming languages'){
		document.getElementById("sss9-12").style.display="none";
		document.getElementById("sssprogramminglanguage").style.display="inline";
		document.getElementById("sssengineeringdesign").style.display="none";
		document.getElementById("sssmultimediadesign").style.display="none";
		document.getElementById("sssmobiledevelopment").style.display="none";
		document.getElementById("ssscomputernetwork").style.display="none";
		document.getElementById("sssdatabasetraining").style.display="none";
		document.getElementById("sssadministrationtraining").style.display="none";
		        }
		if(ti=='engineering design training'){
		document.getElementById("sss9-12").style.display="none";
		document.getElementById("sssprogramminglanguage").style.display="none";
		document.getElementById("sssengineeringdesign").style.display="inline";
		document.getElementById("sssmultimediadesign").style.display="none";
		document.getElementById("sssmobiledevelopment").style.display="none";
		document.getElementById("ssscomputernetwork").style.display="none";
		document.getElementById("sssdatabasetraining").style.display="none";
		document.getElementById("sssadministrationtraining").style.display="none";
		        }
	    if(ti=='multimedia design training'){
		document.getElementById("sss9-12").style.display="none";
		document.getElementById("sssprogramminglanguage").style.display="none";
		document.getElementById("sssengineeringdesign").style.display="none";
		document.getElementById("sssmultimediadesign").style.display="inline";
		document.getElementById("sssmobiledevelopment").style.display="none";
		document.getElementById("ssscomputernetwork").style.display="none";
		document.getElementById("sssdatabasetraining").style.display="none";
		document.getElementById("sssadministrationtraining").style.display="none";
		        }
	    if(ti=='mobile development training'){
		document.getElementById("sss9-12").style.display="none";
		document.getElementById("sssprogramminglanguage").style.display="none";
		document.getElementById("sssengineeringdesign").style.display="none";
		document.getElementById("sssmultimediadesign").style.display="none";
		document.getElementById("sssmobiledevelopment").style.display="inline";
		document.getElementById("ssscomputernetwork").style.display="none";
		document.getElementById("sssdatabasetraining").style.display="none";
		document.getElementById("sssadministrationtraining").style.display="none";
		        }	  
	    if(ti=='computer network training'){
		document.getElementById("sss9-12").style.display="none";
		document.getElementById("sssprogramminglanguage").style.display="none";
		document.getElementById("sssengineeringdesign").style.display="none";
		document.getElementById("sssmultimediadesign").style.display="none";
		document.getElementById("sssmobiledevelopment").style.display="none";
		document.getElementById("ssscomputernetwork").style.display="inline";
		document.getElementById("sssdatabasetraining").style.display="none";
		document.getElementById("sssadministrationtraining").style.display="none";
		        }
	    if(ti=='database training'){
		document.getElementById("sss9-12").style.display="none";
		document.getElementById("sssprogramminglanguage").style.display="none";
		document.getElementById("sssengineeringdesign").style.display="none";
		document.getElementById("sssmultimediadesign").style.display="none";
		document.getElementById("sssmobiledevelopment").style.display="none";
		document.getElementById("ssscomputernetwork").style.display="none";
		document.getElementById("sssdatabasetraining").style.display="inline";
		document.getElementById("sssadministrationtraining").style.display="none";
		        }
	    if(ti=='administration training'){
		document.getElementById("sss9-12").style.display="none";
		document.getElementById("sssprogramminglanguage").style.display="none";
		document.getElementById("sssengineeringdesign").style.display="none";
		document.getElementById("sssmultimediadesign").style.display="none";
		document.getElementById("sssmobiledevelopment").style.display="none";
		document.getElementById("ssscomputernetwork").style.display="none";
		document.getElementById("sssdatabasetraining").style.display="none";
		document.getElementById("sssadministrationtraining").style.display="inline";
		        }
}

*/


function close_all_ssc()
{
		document.getElementById("divsscat").style.display="none";
	
}
function close_all_sssc()
{
		document.getElementById("divssscat").style.display="none";
	
}
function open_all_ssc()
{
		document.getElementById("divsscat").style.display="inline";
	
}
function open_all_sssc()
{
		document.getElementById("divssscat").style.display="inline";
	
}
function all_sc_value()
{
		document.getElementById("scateducation").value=0;
		document.getElementById("scatshopping").value=0;
		document.getElementById("scatrealestate").value=0;
		document.getElementById("scatvehicle").value=0;	
}
function all_ssc_value()
{
		document.getElementById("sstutioncoaching").value=0;
		document.getElementById("sstraininginstitute").value=0;
		document.getElementById("sscolleges").value=0;
		document.getElementById("ssschools").value=0;
		document.getElementById("ssspoken").value=0;
		document.getElementById("ssmusic").value=0;
		document.getElementById("ssdance").value=0;	
	
}