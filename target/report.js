$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/FeatureFiles/Ally.feature");
formatter.feature({
  "name": "To validate login functionality of Ally Webpage",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To validate valid username and valid password of Ally Webpage",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "To launch the chrome web browser and maximize the chrome window",
  "keyword": "Given "
});
formatter.match({
  "location": "AllyFashLogin.to_launch_the_chrome_web_browser_and_maximize_the_chrome_window()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To launch the url of Ally Webpage",
  "keyword": "When "
});
formatter.match({
  "location": "AllyFashLogin.to_launch_the_url_of_Ally_Webpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass valid username in email id field",
  "keyword": "And "
});
formatter.match({
  "location": "AllyFashLogin.to_pass_valid_username_in_email_id_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass valid password in password text field",
  "keyword": "And "
});
formatter.match({
  "location": "AllyFashLogin.to_pass_valid_password_in_password_text_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click login icon button",
  "keyword": "And "
});
formatter.match({
  "location": "AllyFashLogin.to_click_login_icon_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To close the chrome web browser",
  "keyword": "Then "
});
formatter.match({
  "location": "AllyFashLogin.to_close_the_chrome_web_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To validate the positive and negative combination for login field",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "To launch browser and max window",
  "keyword": "Given "
});
formatter.step({
  "name": "To launch the url of Ally Fashion",
  "keyword": "When "
});
formatter.step({
  "name": "To pass positive and negative data \"\u003cemaildatas\u003e\" to email field",
  "keyword": "When "
});
formatter.step({
  "name": "To pass positive and negative data \"\u003cpassworddatas\u003e\" to password field",
  "keyword": "When "
});
formatter.step({
  "name": "To click the login",
  "keyword": "And "
});
formatter.step({
  "name": "To close browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "emaildatas",
        "passworddatas"
      ]
    },
    {
      "cells": [
        "tamilkrisha@gmail.com",
        "Tamil@97"
      ]
    },
    {
      "cells": [
        "vivektamil@gmail.com",
        "Krisha@14"
      ]
    },
    {
      "cells": [
        "vitam18@gmail.com",
        "Shree@92"
      ]
    },
    {
      "cells": [
        "vtk914@gmail.com",
        "Vitam@14"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To validate the positive and negative combination for login field",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "To launch browser and max window",
  "keyword": "Given "
});
formatter.match({
  "location": "AllyLoginPosAndNegTest.to_launch_browser_and_max_window()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To launch the url of Ally Fashion",
  "keyword": "When "
});
formatter.match({
  "location": "AllyLoginPosAndNegTest.to_launch_the_url_of_Ally_Fashion()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass positive and negative data \"tamilkrisha@gmail.com\" to email field",
  "keyword": "When "
});
formatter.match({
  "location": "AllyLoginPosAndNegTest.to_pass_positive_and_negative_data_to_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass positive and negative data \"Tamil@97\" to password field",
  "keyword": "When "
});
formatter.match({
  "location": "AllyLoginPosAndNegTest.to_pass_positive_and_negative_data_to_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click the login",
  "keyword": "And "
});
formatter.match({
  "location": "AllyLoginPosAndNegTest.to_click_the_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "AllyLoginPosAndNegTest.to_close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the positive and negative combination for login field",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "To launch browser and max window",
  "keyword": "Given "
});
formatter.match({
  "location": "AllyLoginPosAndNegTest.to_launch_browser_and_max_window()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To launch the url of Ally Fashion",
  "keyword": "When "
});
formatter.match({
  "location": "AllyLoginPosAndNegTest.to_launch_the_url_of_Ally_Fashion()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass positive and negative data \"vivektamil@gmail.com\" to email field",
  "keyword": "When "
});
formatter.match({
  "location": "AllyLoginPosAndNegTest.to_pass_positive_and_negative_data_to_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass positive and negative data \"Krisha@14\" to password field",
  "keyword": "When "
});
formatter.match({
  "location": "AllyLoginPosAndNegTest.to_pass_positive_and_negative_data_to_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click the login",
  "keyword": "And "
});
formatter.match({
  "location": "AllyLoginPosAndNegTest.to_click_the_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "AllyLoginPosAndNegTest.to_close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the positive and negative combination for login field",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "To launch browser and max window",
  "keyword": "Given "
});
formatter.match({
  "location": "AllyLoginPosAndNegTest.to_launch_browser_and_max_window()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To launch the url of Ally Fashion",
  "keyword": "When "
});
formatter.match({
  "location": "AllyLoginPosAndNegTest.to_launch_the_url_of_Ally_Fashion()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass positive and negative data \"vitam18@gmail.com\" to email field",
  "keyword": "When "
});
formatter.match({
  "location": "AllyLoginPosAndNegTest.to_pass_positive_and_negative_data_to_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass positive and negative data \"Shree@92\" to password field",
  "keyword": "When "
});
formatter.match({
  "location": "AllyLoginPosAndNegTest.to_pass_positive_and_negative_data_to_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click the login",
  "keyword": "And "
});
formatter.match({
  "location": "AllyLoginPosAndNegTest.to_click_the_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "AllyLoginPosAndNegTest.to_close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the positive and negative combination for login field",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "To launch browser and max window",
  "keyword": "Given "
});
formatter.match({
  "location": "AllyLoginPosAndNegTest.to_launch_browser_and_max_window()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To launch the url of Ally Fashion",
  "keyword": "When "
});
formatter.match({
  "location": "AllyLoginPosAndNegTest.to_launch_the_url_of_Ally_Fashion()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass positive and negative data \"vtk914@gmail.com\" to email field",
  "keyword": "When "
});
formatter.match({
  "location": "AllyLoginPosAndNegTest.to_pass_positive_and_negative_data_to_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass positive and negative data \"Vitam@14\" to password field",
  "keyword": "When "
});
formatter.match({
  "location": "AllyLoginPosAndNegTest.to_pass_positive_and_negative_data_to_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click the login",
  "keyword": "And "
});
formatter.match({
  "location": "AllyLoginPosAndNegTest.to_click_the_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "AllyLoginPosAndNegTest.to_close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/FeatureFiles/AllyLogin.feature");
formatter.feature({
  "name": "To validate the login functions of Ally Fashion Webpage",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To validate login with invalid username and invalid password",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "To lunch the chrome and maxi",
  "keyword": "Given "
});
formatter.match({
  "location": "AllyValidorInvalidPwd.to_lunch_the_chrome_and_maxi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To launch the url of Ally sign in page",
  "keyword": "When "
});
formatter.match({
  "location": "AllyValidorInvalidPwd.to_launch_the_url_of_Ally_sign_in_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass the invalid username in email field",
  "rows": [
    {
      "cells": [
        "emailone",
        "andrewbrains@gmail.com"
      ]
    },
    {
      "cells": [
        "emailtwo",
        "carlosdrakes@gmail.com"
      ]
    },
    {
      "cells": [
        "emailthree",
        "taylorvinso@gmail.com"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "AllyValidorInvalidPwd.to_pass_the_invalid_username_in_email_field(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass the invalid password in password field",
  "rows": [
    {
      "cells": [
        "passwordone",
        "passwordtwo",
        "passwordthree"
      ]
    },
    {
      "cells": [
        "Brainandre@77",
        "drewbrain@17",
        "ABwilson@65"
      ]
    },
    {
      "cells": [
        "Drakestriker@7",
        "carl@4555",
        "Viper@dc"
      ]
    },
    {
      "cells": [
        "tayvins@451",
        "Vins54@Tv",
        "Taylor@vi"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "AllyValidorInvalidPwd.to_pass_the_invalid_password_in_password_field(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click the submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AllyValidorInvalidPwd.to_click_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "AllyValidorInvalidPwd.to_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
});