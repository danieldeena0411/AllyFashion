package org.stepdefinition;

import org.pojo.classes.LoginPOJO;
import org.smes.Base;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AllyLoginPosAndNegTest extends Base {
	
	LoginPOJO l;

@Given("To launch browser and max window")
public void to_launch_browser_and_max_window() {

	browserLaunch();
	maxWindow();

}

@When("To launch the url of Ally Fashion")
public void to_launch_the_url_of_Ally_Fashion() {

	urlLaunch("https://allyfashion.com/customer/account/login/referer/aHR0cHM6Ly9hbGx5ZmFzaGlvbi5jb20v/");

}



@When("To pass positive and negative data {string} to email field")
public void to_pass_positive_and_negative_data_to_email_field(String email) {
 
	l = new LoginPOJO();
	
	passTxt(email, l.getEmailid());

}

@When("To pass positive and negative data {string} to password field")
public void to_pass_positive_and_negative_data_to_password_field(String password) {
  passTxt(password, l.getPwd());
}

@When("To click the login")
public void to_click_the_login() {
   
	click(l.getLogin());
}

@Then("To close browser")
public void to_close_browser() {
 
	CloseWin();
	
}



}
