Feature: To validate login functionality of Ally Webpage

  Scenario: To validate valid username and valid password of Ally Webpage
    Given To launch the chrome web browser and maximize the chrome window
    When To launch the url of Ally Webpage
    And To pass valid username in email id field
    And To pass valid password in password text field
    And To click login icon button
    Then To close the chrome web browser

  Scenario Outline: To validate the positive and negative combination for login field
    Given To launch browser and max window
    When To launch the url of Ally Fashion
    When To pass positive and negative data "<emaildatas>" to email field
    When To pass positive and negative data "<passworddatas>" to password field
    And To click the login
    Then To close browser

    Examples: 
      | emaildatas            | passworddatas |
      | tamilkrisha@gmail.com | Tamil@97      |
      | vivektamil@gmail.com  | Krisha@14     |
      | vitam18@gmail.com     | Shree@92      |
      | vtk914@gmail.com      | Vitam@14      |

  