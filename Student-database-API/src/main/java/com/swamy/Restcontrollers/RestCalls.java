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

import com.swamy.models.LoginModel;
import com.swamy.models.StatusMessege;
import com.swamy.models.Student;
import com.swamy.models.User;
import com.swamy.services.RestService;

@RestController
public class RestCalls {
	
	@Autowired
	private RestService restService;
	
	@GetMapping("/users")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<User> getUsers(){
		return restService.getUsers();
		
	}
	
	@PostMapping("/user")
	@CrossOrigin(origins = "http://localhost:4200")
	public void createUser( @RequestBody User user) {
		 restService.createUser(user);
	}
	
	@DeleteMapping("/users/{email}")
	@CrossOrigin(origins = "http://localhost:4200")
	public void deleteUser(@PathVariable String email) {
		 restService.deleteUser(email);
	}
	
//	@GetMapping("/users/{name}")
//	@CrossOrigin(origins = "http://localhost:4500")
//	public User getuserByFirstName(@PathVariable String name) {
//		return restService.getuserByFirstName(name);
//		
//	}
	
	@GetMapping("/users/{email}")
	@CrossOrigin(origins = "http://localhost:4200")
	public User getuserByEmailId(@PathVariable String email) {
		return restService.getuserByEmailId(email);
		
	}
	
	@PostMapping("/login")
	@CrossOrigin(origins = "http://localhost:4200")
	public StatusMessege checkLoginInfo(@RequestBody LoginModel loginModel) {
		return restService.checkLoginInfo(loginModel);
		
	}
	
	
	
	
	

}
