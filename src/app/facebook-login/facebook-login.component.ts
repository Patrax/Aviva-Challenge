import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare const FB:any;

@Component({
  selector: 'facebook-login',
  templateUrl: './facebook-login.component.html',
  styleUrls: ['./facebook-login.component.css']
})
export class FacebookLoginComponent implements OnInit {

	router;

  constructor(router:Router) {
  	this.router = router;

    FB.init({
	    appId      : '350865671967201',
	    cookie     : true,  // enable cookies to allow the server to access
	                        // the session
	    xfbml      : true,  // parse social plugins on this page
	    version    : 'v2.8' // use graph api version 2.8
    });
  }

  onFacebookLoginClick() {
	  FB.login();
  }

  onFacebookLogoutClick(event){
  	console.log('EVENT RECEIVED');
  	FB.logout();
  }

  statusChangeCallback(resp, success) {
	  if (resp.status === 'connected') {
	    // connect here with your server for facebook login by passing access token given by facebook
	  	FB.api(
			    "/" + resp.authResponse.userID,
			    function (response) {
			      if (response && !response.error) {
			        /* handle the result */
			        localStorage.setItem('name', response.name);
			        typeof success === 'function' && success();
			      }
			    }
			);
	  }else if (resp.status === 'not_authorized') {
	      
	  }else {
	      
	  }
  };

  ngOnInit() {
	  FB.getLoginStatus(response => {
      this.statusChangeCallback(response,
      	() => {
      		this.router.navigate(['/map']);
      	});
	  });
  }

}
