Feature: To validate the login functions of Ally Fashion Webpage


Scenario: To validate login with invalid username and invalid password
   Given To lunch the chrome and maxi
   
    When To launch the url of Ally sign in page
    #one dimensional map
    And To pass the invalid username in email field
      | emailone   | andrewbrains@gmail.com |
      | emailtwo   | carlosdrakes@gmail.com |
      | emailthree | taylorvinso@gmail.com  |
    #two dimensional map
    And To pass the invalid password in password field
      | passwordone    | passwordtwo  | passwordthree |
      | Brainandre@77  | drewbrain@17 | ABwilson@65   |
      | Drakestriker@7 | carl@4555    | Viper@dc      |
      | tayvins@451    | Vins54@Tv    | Taylor@vi     |

      And To click the submit button
      
      And To close the browser 