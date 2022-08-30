package com.lti.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lti.beans.Product;
import com.lti.beans.User;
import com.lti.excep.UserException;
import com.lti.responsemanager.ResponseHandler;
import com.lti.services.UserService;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/user-api")
public class UserController {

	@Autowired
	UserService service;
	

	///localhost:8090/user-api/register-user
	
	@PostMapping("/register-user")
	 public ResponseEntity<?>  registerUser(@RequestBody User u) throws UserException
	 {
		
		
		System.out.println("from postman : "+u);
		 
		 User exists = service.userEmailExist(u.getEmail());
		 
		 
		 
		 if(exists.getId()!=0) {
			 return ResponseHandler.generateResponse("User Already Exisxts", HttpStatus.CONFLICT,u);
			 //return new ResponseEntity<>("User Already Exixts", HttpStatus.CONFLICT);
			 
		 }
		 else {
			 
			 User user = service.registerUser(u);
			 return ResponseHandler.generateResponse("Registered Successfully", HttpStatus.OK,user);
			
		 }
	     
	 }
	
	
	// localhost:8090/user-api/login-user
	
	@PostMapping("/login-user")
	 public ResponseEntity<?> loginUser(@RequestBody User u) throws UserException
	 {
	
		
		User exists = service.userEmailExist(u.getEmail());
		
		System.out.println("user exists:"+exists.getPassword());
		System.out.println("body user:"+u.getPassword());
		
		if(exists.getId()!=0) {
			// user found
			//check password
			if(u.getPassword().equals(exists.getPassword())) {
				
				return ResponseHandler.generateResponse("User Login Successful", HttpStatus.OK,exists);
			}
			else {
				//password matched 
				return ResponseHandler.generateResponse("Password Not Matched", HttpStatus.UNAUTHORIZED,u);
			}
			
			 
		 }
		 else {
			 //user not found
			 return ResponseHandler.generateResponse("User Not Found", HttpStatus.NOT_FOUND,u);
			 
		 }
	     	    
	    
	 }
	
	@GetMapping("/get-user-byid/{id}")
	public ResponseEntity<?> getUserById(@PathVariable int id) throws UserException
	{
		System.out.println("Inside Controller : ");
		User pp =service.getUserById(id);
		
		if(pp.getId()==0) {
			return ResponseHandler.generateResponse("User Not Found", HttpStatus.NOT_FOUND,pp);
		}else {
			return ResponseHandler.generateResponse("User Detail", HttpStatus.OK,pp);
		}
		
		
	}
	
	
	
	
	@GetMapping("/login")
	 public ResponseEntity<?> login()
	 {
		 //System.out.println("from postman : "+u);
	     //User user = service.registerUser(u);
		User u = new User();
		List<User> uuu = new ArrayList<User>();
		
		
		uuu.add(u);
		uuu.add(u);
		uuu.add(u);
		
		return ResponseHandler.generateResponse("Successfully added data!", HttpStatus.OK, uuu);
	    
	 }
	
	
	
	@PutMapping("/update-user/{id}")
	public ResponseEntity<?> updateUser(@PathVariable int id,@RequestBody User u) throws UserException
	{
		System.out.println("Inside Controller : "+u);
		// first get Product by id 
		User pp1 =service.getUserById(id);
		
		
		System.out.println("User by id : "+pp1);
		
		u.setId(pp1.getId());
	
//		if(c.getName()==null) {
//			c.setName(pp1.getName());
//		}
//		if(c.getDescription()==null) {
//			c.setDescription(pp1.getDescription());
//		}
//		if(c.getPrice()==0) {
//			c.setPrice(pp1.getPrice());
//		}
//		if(c.getStock()==0) {
//			c.setStock(pp1.getStock());
//		}
//		if(c.getImageUrl()==null) {
//			c.setImageUrl(pp1.getImageUrl());
//		}
//		if(c.getCategory().getId()==0) {
//			//c.setCategory(pp1.getCategory());
//			c.setCategory(pp1.getCategory());
//			
//		}
//		if(c.getRetailer().getId()==0) {
//			c.setRetailer(pp1.getRetailer());
//		}
		
		
		System.out.println("After update c : "+ u);
		
		// then update all fields with new object
		User pp =service.updateUser(id, u);
		System.out.println("After Update : "+pp);
		//Product pp =service.addProduct(c);
		return ResponseHandler.generateResponse("User Updated", HttpStatus.OK,pp);
	}
	
}
