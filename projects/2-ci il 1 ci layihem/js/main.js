function scrollFunction() {
	if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.getElementById("navbar").style.backgroundColor = "#ECECEC99";
            document.getElementById("navbar").style.transition = "all 1s ease";
    document.getElementById("navbar").style.boxShadow = "0px 5px 8px 5px #ECECEC99";
          } else {
        document.getElementById("navbar").style.backgroundColor = "#ECECEC00";
        document.getElementById("navbar").style.boxShadow = "0px 0px 0px 0px #888888"; 
              
          }
}

		

		function validation(){

			var emails = document.getElementById('emails').value;



			if(emails == ""){
				document.getElementById('emailids').innerHTML =" ** Emaili düzgün daxil edin";
				return false;
			}
			if(emails.indexOf('@') <= 0 ){
				document.getElementById('emailids').innerHTML =" ** @ Səhv yerdədir";
				return false;
			}

			if((emails.charAt(emails.length-4)!='.') && (emails.charAt(emails.length-3)!='.')){
				document.getElementById('emailids').innerHTML =" ** . Səhv yerdədir";
				return false;
			}
		}