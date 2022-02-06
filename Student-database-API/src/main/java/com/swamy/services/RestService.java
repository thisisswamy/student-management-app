package com.swamy.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import org.apache.tomcat.util.codec.binary.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.swamy.models.LoginModel;
import com.swamy.models.StatusMessege;
import com.swamy.models.Student;
import com.swamy.models.User;
import com.swamy.repositories.StudentRepo;
import com.swamy.repositories.UserRespo;


@Service
public class RestService {
	
		List<User> list=new ArrayList<>();
		
		@Autowired
		private UserRespo userRepo;
		
		@Autowired
		private StudentRepo studentRepo;
		
		@Autowired
		private StatusMessege statusMessege;
	
		
		public List<User> getUsers() {
			return userRepo.findAll();
		}
		public void createUser(User user) {
			 userRepo.save(user);
		}

		public User getuserByFirstName(String name) {
			 User user = userRepo.findByFirstname(name);
			 System.out.println(user);
			 return user;
		}

		public void deleteUser(String email) {
			User user =userRepo.findByEmail(email); 
			userRepo.delete(user);
			
		}
		public User getuserByEmailId(String email) {
			return userRepo.findByEmail(email);
		}
		public String generateTokenId() {
			int leftLimit = 97; // letter 'a'
		    int rightLimit = 122; // letter 'z'
		    int targetStringLength = 30;
		    Random random = new Random();
		    
		    String generatedString = random.ints(leftLimit, rightLimit + 1)
		      .limit(targetStringLength)
		      .collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append)
		      .toString();
		    return generatedString;	
		}

		public StatusMessege checkLoginInfo(LoginModel loginModel){
//			int leftLimit = 97; // letter 'a'
//		    int rightLimit = 122; // letter 'z'
//		    int targetStringLength = 30;
//		    Random random = new Random();
//		    
//		    String generatedString = random.ints(leftLimit, rightLimit + 1)
//		      .limit(targetStringLength)
//		      .collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append)
//		      .toString();

		   // System.out.println(generatedString);
			
			
			User user=userRepo.findByEmail(loginModel.getUsername());
			if(user!=null){
				System.out.println("entered..");
				if(user.getPassword().equals(loginModel.getPassword())) {
					System.out.println("pass crct..");
					 statusMessege.setMessege("success");
					 statusMessege.setTokenId(generateTokenId());
					 return statusMessege;
					
				}
				else {
					System.out.println("pass incrct..");
					statusMessege.setMessege("invalid password");
					 return statusMessege;
				}
			}
			else {
				System.out.println("invalid username..");
				statusMessege.setMessege("invalid user name");
				 return statusMessege;
			}
		}
		
		public void registerStudent(Student student) {
			 studentRepo.save(student);
		}
		public Student getStudentByDesignation(String designation) {
			return studentRepo.findByDesignation(designation);
			
		}
		public List<Student> getStudents() {
			return studentRepo.findAll();
		}
		
		public void deleteStudentByEmail(String email) {
			Student student=studentRepo.findByEmail(email);
			studentRepo.delete(student);
			
		}	

	

}
