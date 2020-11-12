firebase.auth().onAuthStateChanged(function(user) {
	console.log(user);
 	 if (user) {
 	 	//User Signed In Do Something Like a Redirect
 	 }
 	  else
 	  {
    	//User not Signed Do Nothing
    	//Keep this for future condtions
 	 	}
			});