package Runner;

import cucumber.api.CucumberOptions;

import org.junit.runner.RunWith;

import cucumber.api.junit.Cucumber;



@RunWith(Cucumber.class)

    @CucumberOptions(
            features = ".",tags = "@E2E",

            glue = {"StepDefinition"},
            format = {"pretty", "html:htmlReport"},
            dryRun = false

    )
    public class TestRunner {

}
