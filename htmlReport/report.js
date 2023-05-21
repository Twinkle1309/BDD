$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/Register.feature");
formatter.feature({
  "line": 1,
  "name": "NopCommerce Register",
  "description": "",
  "id": "nopcommerce-register",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "NopCommerce valid register test",
  "description": "",
  "id": "nopcommerce-register;nopcommerce-valid-register-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@E2E"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User Click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User on register page and verify register page title",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enter \"\u003cFirstname\u003e\" and \"\u003cLastname\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User enter\"\u003cEmail\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User enter\"\u003cPassword\u003e\" and \"\u003cConfirmPassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "click on register button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "nopcommerce-register;nopcommerce-valid-register-test;",
  "rows": [
    {
      "cells": [
        "Firstname",
        "Lastname",
        "Email",
        "Password",
        "ConfirmPassword"
      ],
      "line": 15,
      "id": "nopcommerce-register;nopcommerce-valid-register-test;;1"
    },
    {
      "cells": [
        "Twinkal",
        "Patel",
        "twinklepatel491@gmail.com",
        "Twinkal000@",
        "Twinkal000@"
      ],
      "line": 16,
      "id": "nopcommerce-register;nopcommerce-valid-register-test;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "User able to open Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Enter an Url",
  "keyword": "And "
});
formatter.match({
  "location": "Register.user_able_to_open_Browser()"
});
formatter.result({
  "duration": 4173644600,
  "status": "passed"
});
formatter.match({
  "location": "Register.enter_an_Url()"
});
formatter.result({
  "duration": 1252933400,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "NopCommerce valid register test",
  "description": "",
  "id": "nopcommerce-register;nopcommerce-valid-register-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@E2E"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User Click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User on register page and verify register page title",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enter \"Twinkal\" and \"Patel\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User enter\"twinklepatel491@gmail.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User enter\"Twinkal000@\" and \"Twinkal000@\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "click on register button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Register.user_Click_on_register_link()"
});
formatter.result({
  "duration": 980441900,
  "status": "passed"
});
formatter.match({
  "location": "Register.user_on_register_page_and_verify_register_page_title()"
});
formatter.result({
  "duration": 10863400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Twinkal",
      "offset": 12
    },
    {
      "val": "Patel",
      "offset": 26
    }
  ],
  "location": "Register.user_enter_and_(String,String)"
});
formatter.result({
  "duration": 263304800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "twinklepatel491@gmail.com",
      "offset": 11
    }
  ],
  "location": "Register.user_enter(String)"
});
formatter.result({
  "duration": 98948500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Twinkal000@",
      "offset": 11
    },
    {
      "val": "Twinkal000@",
      "offset": 29
    }
  ],
  "location": "Register.user_enter_and(String,String)"
});
formatter.result({
  "duration": 178602400,
  "status": "passed"
});
formatter.match({
  "location": "Register.click_on_register_button()"
});
formatter.result({
  "duration": 832443200,
  "status": "passed"
});
formatter.match({
  "location": "Register.user_close_the_browser()"
});
formatter.result({
  "duration": 215421601,
  "status": "passed"
});
});