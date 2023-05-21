package StepDefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

//import java.util.List;
public class Register {
    WebDriver driver;
    @Given("^User able to open Browser$")
    public void user_able_to_open_Browser()  {
        WebDriverManager.chromedriver().setup();
        driver =new ChromeDriver();
        driver.manage().window().maximize();

    }

    @Given("^Enter an Url$")
    public void enter_an_Url() {

            driver.get("https://demo.nopcommerce.com/");
    }

    @When("^User Click on register link$")
    public void user_Click_on_register_link() {
        driver.findElement(By.linkText("Register")).click();
    }

    @When("^User on register page and verify register page title$")
    public void user_on_register_page_and_verify_register_page_title()  {
        String title = driver.getTitle();
        System.out.println(title);
        Assert.assertEquals("nopCommerce demo store. Register",title);
            }

    @Then("^User enter \"([^\"]*)\" and \"([^\"]*)\"$")
    public void user_enter_and_(String Firstname, String Lastname)  {
driver.findElement(By.id("FirstName")).sendKeys("Twinkal");
driver.findElement(By.id("LastName")).sendKeys("Patel");


    }

    @Then("^User enter\"([^\"]*)\"$")
    public void user_enter(String Email)  {
        driver.findElement(By.id("Email")).sendKeys("twinklepatel491@gmail.com");

    }

    @Then("^User enter\"([^\"]*)\" and \"([^\"]*)\"$")
    public void user_enter_and(String Password, String ConfirmPassword) {
        driver.findElement(By.id("Password")).sendKeys("Twinkal000@");
        driver.findElement(By.id("ConfirmPassword")).sendKeys("Twinkal000@");
    }

    @Then("^click on register button$")
    public void click_on_register_button() {
   driver.findElement(By.id("register-button")).click();
    }


    @Then("^User close the browser$")
    public void user_close_the_browser() {
driver.close();
    }




}
