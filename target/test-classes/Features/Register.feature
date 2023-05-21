Feature:NopCommerce Register
  Background:
    Given User able to open Browser
    And Enter an Url
@E2E
Scenario Outline: NopCommerce valid register test
When User Click on register link
And User on register page and verify register page title
Then User enter "<Firstname>" and "<Lastname>"
Then User enter"<Email>"
Then User enter"<Password>" and "<ConfirmPassword>"
Then click on register button
And User close the browser
  Examples:
    | Firstname | Lastname | Email                     | Password    | ConfirmPassword |
    | Twinkal   | Patel    | twinklepatel491@gmail.com | Twinkal000@ | Twinkal000@     |