firebase.auth().onAuthStateChanged(function(user) {
 	 if (user) {
 	 	//User Signed In Do Something Like a Redirect
        window.location = "https://the-rebooted-coder.github.io/Take-Notes-Web/take-notes";
 	 }
 	  else
 	  {
    	//Dispay an error page or reload the same page again
 	 	}
			});