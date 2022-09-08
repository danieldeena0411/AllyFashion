package org.stepdefinition;

import org.junit.AfterClass;
import org.junit.runner.RunWith;
import org.jvm.report.JVMReport;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources/FeatureFiles",
							glue="org.stepdefinition",
							 monochrome=true,
							 dryRun=false,
							 snippets=SnippetType.CAMELCASE,
							 plugin= {"html:target","junit:JUnitReport\\junitrepo.xml","json:JsonReport\\jsonrepo.json"})

public class TestRunnerClass {

	@AfterClass
	
	public static void generate() {
		
		JVMReport.generateTheReport("C:\\Users\\Dell\\eclipse-workspace\\CucumberAlly\\JsonReport\\jsonrepo.json");
}
}
