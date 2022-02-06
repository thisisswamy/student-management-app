package com.swamy.Restcontrollers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.swamy.models.Student;
import com.swamy.models.User;
import com.swamy.services.RestService;

@RestController
public class StudentRestCalls {
	@Autowired
	private RestService restService;
	
	
	
	@DeleteMapping("/students/{email}")
	@CrossOrigin(origins = "http://localhost:4200")
	public void deleteStudentByEmail(@PathVariable String email) {
		System.out.println("delete called");
		restService.deleteStudentByEmail(email);
	}
	
	@PostMapping("/students")
	@CrossOrigin(origins = "http://localhost:4200")
	public void registerStudent(@RequestBody Student student) {
		restService.registerStudent(student);
	}
	
	@GetMapping("/students/{designation}")
	@CrossOrigin(origins = "http://localhost:4200")
	public Student getStudentByDesignation(@PathVariable String designation) {
		return restService.getStudentByDesignation(designation);
		
	}
	@GetMapping("/students")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<Student> getStudents(){
		return restService.getStudents();
		
	}

}
