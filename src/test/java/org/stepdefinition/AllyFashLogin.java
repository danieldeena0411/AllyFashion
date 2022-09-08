package org.stepdefinition;

import org.pojo.classes.LoginPOJO;
import org.smes.Base;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AllyFashLogin extends Base {
	
	LoginPOJO l;

		@Given("To launch the chrome web browser and maximize the chrome window")
	public void to_launch_the_chrome_web_browser_and_maximize_the_chrome_window() {
	    
		browserLaunch();
		maxWindow();
			
	}

	@When("To launch the url of Ally Webpage")
	public void to_launch_the_url_of_Ally_Webpage() {
	    
		urlLaunch("https://allyfashion.com/customer/account/login/referer/aHR0cHM6Ly9hbGx5ZmFzaGlvbi5jb20v/");
	
	}


	@When("To pass valid username in email id field")
	public void to_pass_valid_username_in_email_id_field() {
	   
		l = new LoginPOJO();
		
		passTxt("tamilvivek", l.getEmailid());
	}

	@When("To pass valid password in password text field")
	public void to_pass_valid_password_in_password_text_field() {
	 
		passTxt("48821411", l.getPwd());
	
	}

	@When("To click login icon button")
	public void to_click_login_icon_button() {
	  
		click(l.getLogin());
	}

	@Then("To close the chrome web browser")
	public void to_close_the_chrome_web_browser() {
	    
		CloseWin();
	}



}
