package org.jvm.report;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class JVMReport {
	 
	public static void generateTheReport(String jsonRepoPath) {

		//1.Mention the target folder Location - File
		
		File f = new File("src\\test\\resources\\Jvmrepo") ;
	

	//2. Add details  to the report using Configuration  class
	
	Configuration c = new Configuration(f, "Ally Fashion");
	c.addClassifications("Platform Name", "Windows");
	c.addClassifications("Platform Version", "10");
	c.addClassifications("Browser Name", "Chrome");
	c.addClassifications("Browser Version", "104.0");
	
	// Add json files paths into List<String>
	
	List<String> l = new ArrayList<String>();
	l.add(jsonRepoPath);
	
	//4. Create objects for Report Builder class
	ReportBuilder r = new ReportBuilder(l, c);
	
	// Using the create object call generatorReports()
	r.generateReports();
	
	
}
}