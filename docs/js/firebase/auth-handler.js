firebase.auth().onAuthStateChanged(function(user) {
 	 if (user) {
 	 	//User Signed In Do Something Like a Redirect
        window.location = "splash.html";
 	 }
 	  else
 	  {
    	//User not Signed Do Nothing
    	//Keep this for future condtions
 	 	}
			});
