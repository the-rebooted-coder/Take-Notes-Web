firebase.auth().onAuthStateChanged(function(user) {
	console.log(user);
 	 if (user) {
 	 	//User Signed In Do Something Like a Redirect
        window.location = "https://the-rebooted-coder.github.io/Take-Notes-Web/take-notes";
 	 }
 	  else
 	  {
    	//User not Signed Do Nothing
    	//Keep this for future condtions
 	 	}
			});