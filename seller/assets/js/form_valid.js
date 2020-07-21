        function b_check(){
		  if(document.myForm.b_name.value.length <= 3)
		     {
			 document.getElementById("b_name_check").style.display="inline";
			 document.getElementById("b_name_check_ok").style.display="none";
             }
		   if(document.myForm.b_name.value.length >= 4) 
		   {
			 document.getElementById("b_name_check").style.display="none";
			 document.getElementById("b_name_check_ok").style.display="inline";
		   }
		   
		}
        
        function name_check(){
 		   var letters = /^[A-Za-z]+$/;
            if(document.myForm.fname.value.match(letters))
             {
				 		  if(document.myForm.fname.value.length <= 2)
		     {
			 document.getElementById("fname_check").style.display="inline";
			 document.getElementById("fname_check_ok").style.display="none";
			 document.getElementById("fname_check_num").style.display="none";
			  }
		       if(document.myForm.fname.value.length >= 3) 
		        {
			     document.getElementById("fname_check").style.display="none";
			    document.getElementById("fname_check_ok").style.display="inline";
			   document.getElementById("fname_check_num").style.display="none";

		        }
			 }
		   else{
			     document.getElementById("fname_check").style.display="none";
			    document.getElementById("fname_check_ok").style.display="none";
			   document.getElementById("fname_check_num").style.display="inline";
			     if(document.myForm.fname.value.length ==0)
					 {
			     document.getElementById("fname_check").style.display="inline";
			    document.getElementById("fname_check_ok").style.display="none";
			   document.getElementById("fname_check_num").style.display="none";	 
					 }
		   }
		   
		}
        function lname_check(){
 		   var letters = /^[A-Za-z]+$/;
            if(document.myForm.lname.value.match(letters))
             {
				 		  if(document.myForm.lname.value.length <= 2)
		     {
			 document.getElementById("lname_check").style.display="inline";
			 document.getElementById("lname_check_ok").style.display="none";
			 document.getElementById("lname_check_num").style.display="none";
			  }
		       if(document.myForm.lname.value.length >= 3) 
		        {
			     document.getElementById("lname_check").style.display="none";
			    document.getElementById("lname_check_ok").style.display="inline";
			   document.getElementById("lname_check_num").style.display="none";

		        }
			 }
		   else{
			     document.getElementById("lname_check").style.display="none";
			    document.getElementById("lname_check_ok").style.display="none";
			   document.getElementById("lname_check_num").style.display="inline";
			     if(document.myForm.lname.value.length ==0)
					 {
			     document.getElementById("lname_check").style.display="inline";
			    document.getElementById("lname_check_ok").style.display="none";
			   document.getElementById("lname_check_num").style.display="none";	 
					 }
		   }
		   
		}
		function num_check(){
			  var phoneno = /^\d{10}$/;
             if(document.myForm.contact.value.match(phoneno))
             {
			 document.getElementById("number_check").style.display="none";
			 document.getElementById("number_check_ok").style.display="inline";
			 }
		     else
		     {
			 document.getElementById("number_check").style.display="inline";
			 document.getElementById("number_check_ok").style.display="none";
			 }
            
		}

		function desc_check(){
			var des=document.myForm.desc.value.length;
			var newdes=20-des;
		  if(des<= 19)
		     {
			 document.getElementById("desc_check").style.display="inline";
			 document.getElementById("desc_check2").style.display="inline";
			 document.getElementById("desc_check2").innerHTML=newdes;
			 document.getElementById("desc_check_ok").style.display="none";
		     document.getElementById("desc_check3").style.display="none";
				
             }
		   if(des>=20)
		   {
			 document.getElementById("desc_check").style.display="none";
			 document.getElementById("desc_check_ok").style.display="inline";
			 document.getElementById("desc_check2").style.display="none";
			 document.getElementById("desc_check3").style.display="inline";
			 document.getElementById("desc_check3").innerHTML=des;
			
		   }

            
		}
	   function shop_check(){
			var shopno=document.myForm.shop_no.value.length;
		   if(shopno<= 6)
		     {
			 document.getElementById("shop_check_ok").style.display="inline";
				
			 }
		   if(shopno>= 7 || shopno==0)
		     {
			 document.getElementById("shop_check_ok").style.display="none";
				
			 }
				 
				 
				 
	   }
	   function block_check(){
			var block=document.myForm.block.value.length;
		   if(block<= 10)
		     {
			 document.getElementById("block_check_ok").style.display="inline";
           
			 }
		   if(block>= 11 || block==0)
		     {
			 document.getElementById("block_check_ok").style.display="none";
          
			 }
				 
				 
				 
	   }

	   function sector_check(){
			var sector=document.myForm.sector.value.length;
		   if(sector<=3)
		     {
			 document.getElementById("sector_check_ok").style.display="inline";
             
			 }
		   if(sector>=4 || sector==0)
		     {
			 document.getElementById("sector_check_ok").style.display="none";
          
			 }			 
	   }
	   function img1_check(){
		var img1=document.myForm.img1.value;
		var img2=document.myForm.img2.value;
		var img3=document.myForm.img3.value;
		var img4=document.myForm.img4.value;
		var img5=document.myForm.img5.value;   
		   if(img1==img2 || img1==img3 || img1==img4 || img1==img5){
		  document.getElementById("img1_check_ok").style.display="none";
          document.getElementById("img1_check").style.display="inline";

		   }
		   if(img1!=img2 && img1!=img3 && img1!=img4 && img1!=img5){
		  document.getElementById("img1_check_ok").style.display="inline";
          document.getElementById("img1_check").style.display="none";
		   }
		   if(img1==null)
			  {
		  document.getElementById("img1_check_ok").style.display="none";
          document.getElementById("img1_check").style.display="inline";			  
			  }

	   }
	   function img2_check(){
		var img1=document.myForm.img1.value;
		var img2=document.myForm.img2.value;
		var img3=document.myForm.img3.value;
		var img4=document.myForm.img4.value;
		var img5=document.myForm.img5.value;   
		   if(img2==img1 || img2==img3 || img2==img4 || img2==img5){
		  document.getElementById("img2_check_ok").style.display="none";
          document.getElementById("img2_check").style.display="inline";
			   
		   }
		   if(img2!=img1 && img2!=img3 && img2!=img4 && img2!=img5){
		  document.getElementById("img2_check_ok").style.display="inline";
          document.getElementById("img2_check").style.display="none";
		   }
		   if(img2==null)
			  {
		  document.getElementById("img2_check_ok").style.display="none";
          document.getElementById("img2_check").style.display="inline";			  
			  }

	   }
	   function img3_check(){
		var img1=document.myForm.img1.value;
		var img2=document.myForm.img2.value;
		var img3=document.myForm.img3.value;
		var img4=document.myForm.img4.value;
		var img5=document.myForm.img5.value;   
		   if(img3==img1 || img3==img2 || img3==img4 || img3==img5){
		  document.getElementById("img3_check_ok").style.display="none";
          document.getElementById("img3_check").style.display="inline";
			  
		   }
		   if(img3!=img1 && img3!=img2 && img3!=img4 && img3!=img5){
		  document.getElementById("img3_check_ok").style.display="inline";
          document.getElementById("img3_check").style.display="none";
			  
		   }
		   if(img3==null)
			  {
		  document.getElementById("img3_check_ok").style.display="none";
          document.getElementById("img3_check").style.display="inline";			  
			  }

	   }
	   function img4_check(){
		var img1=document.myForm.img1.value;
		var img2=document.myForm.img2.value;
		var img3=document.myForm.img3.value;
		var img4=document.myForm.img4.value;
		var img5=document.myForm.img5.value;   
		   if(img4==img1 || img4==img3 || img4==img2 || img4==img5){
		  document.getElementById("img4_check_ok").style.display="none";
          document.getElementById("img4_check").style.display="inline";
			
		   }
		   if(img4!=img1 && img4!=img3 && img4!=img2 && img4!=img5){
		  document.getElementById("img4_check_ok").style.display="inline";
          document.getElementById("img4_check").style.display="none";
	
		   }
		   if(img4==null)
			  {
		  document.getElementById("img4_check_ok").style.display="none";
          document.getElementById("img4_check").style.display="inline";			  
			  }

	   }
	   function img5_check(){
		var img1=document.myForm.img1.value;
		var img2=document.myForm.img2.value;
		var img3=document.myForm.img3.value;
		var img4=document.myForm.img4.value;
		var img5=document.myForm.img5.value;   
		   if(img5==img1 || img5==img3 || img5==img4 || img5==img2){
		  document.getElementById("img5_check_ok").style.display="none";
          document.getElementById("img5_check").style.display="inline";
			 
		   }
		   if(img5!=img1 && img5!=img3 && img5!=img4 && img5!=img2){
		  document.getElementById("img5_check_ok").style.display="inline";
          document.getElementById("img5_check").style.display="none";
			
		   }
		   if(img5==null)
			  {
		  document.getElementById("img5_check_ok").style.display="none";
          document.getElementById("img5_check").style.display="inline";			  
			  }
		   

	   }

		function pass_check(){
			var pass_length=document.myForm.password.value.length;
		  var passw=  /^[A-Za-z]\w{8,14}$/;
          if(document.myForm.password.value.match(passw)) 
             {
			 document.getElementById("pass_check1").style.display="none";
			 document.getElementById("pass_check2").style.display="none";
			 document.getElementById("pass_check3").style.display="inline";				 
			 }
		  if(pass_length <= 4)
		     {
			 document.getElementById("pass_check1").style.display="inline";
			 document.getElementById("pass_check2").style.display="none";
			 document.getElementById("pass_check3").style.display="none";
             }
		  if(pass_length >= 5 && pass_length <= 8)
		     {
			 document.getElementById("pass_check1").style.display="none";
			 document.getElementById("pass_check2").style.display="inline";
			 document.getElementById("pass_check3").style.display="none";
             }

            
		}



