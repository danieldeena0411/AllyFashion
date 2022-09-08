package org.stepdefinition;

import java.awt.List;
import java.util.Map;

import org.pojo.classes.LoginPOJO;
import org.smes.Base;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class AllyValidorInvalidPwd extends Base {

	LoginPOJO l;
	
	@Given("To lunch the chrome and maxi")
	public void to_lunch_the_chrome_and_maxi() {
		
		browserLaunch();
		
		maxWindow();
	
}



@When("To launch the url of Ally sign in page")
public void to_launch_the_url_of_Ally_sign_in_page() {

	urlLaunch("https://allyfashion.com/customer/account/login/referer/aHR0cHM6Ly9hbGx5ZmFzaGlvbi5jb20v/");

}

@When("To pass the invalid username in email field")
public void to_pass_the_invalid_username_in_email_field(io.cucumber.datatable.DataTable dt) {
    
	l = new LoginPOJO();
	
	Map<String, String> m = dt.asMap(String.class, String.class);
	
	passTxt(m.get("emailtwo"),l.getEmailid());
}

@When("To pass the invalid password in password field")
public void to_pass_the_invalid_password_in_password_field(io.cucumber.datatable.DataTable dt) {
   
	 java.util.List<Map<String,String>> m = dt.asMaps();
	 
	 passTxt(m.get(1).get("passwordthree"),l.getPwd());
	
}

@When("To click the submit button")
public void to_click_the_submit_button() {

	click(l.getLogin());
}

@When("To close the browser")
public void to_close_the_browser() {
    
	CloseWin();
}



}
