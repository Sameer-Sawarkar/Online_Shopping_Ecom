package com.lti.controller;

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


import com.lti.beans.Retailer;
import com.lti.beans.User;
import com.lti.responsemanager.ResponseHandler;
import com.lti.services.RetailerService;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/retailer-api")
public class RetailerController {
	
	@Autowired
	RetailerService service;
	

	
	@PostMapping("/register-retailer")
	 public ResponseEntity<?>  registerUser(@RequestBody Retailer r)
	 {
		 System.out.println("from postman : "+r);
		 
		 Retailer exists = service.retailerEmailExist(r.getEmail());
		 
		 
		 
		 if(exists.getRetailer_id()!=0) {
			 return ResponseHandler.generateResponse("Retailer Already Exixts", HttpStatus.CONFLICT,r);
			 //return new ResponseEntity<>("User Already Exixts", HttpStatus.CONFLICT);
			 
		 }
		 else {
			 
			 Retailer retailer = service.registerRetailer(r);
			 return ResponseHandler.generateResponse("Registered Successfully", HttpStatus.OK,retailer);
			
		 }
	     
	 }
	
	
	
	@PostMapping("/login-retailer")
	 public ResponseEntity<?> loginUser(@RequestBody Retailer r)
	 {
		
		
		Retailer exists = service.retailerEmailExist(r.getEmail());
		
		System.out.println("Retailer exists:"+exists.getPassword());
		System.out.println("body user:"+r.getPassword());
		
		if(exists.getRetailer_id()!=0) {
			// user found
			//check password
			if(r.getPassword().equals(exists.getPassword())) {
				
				return ResponseHandler.generateResponse("Retailer Login Successful", HttpStatus.OK,exists);
			}
			else {
				//password matched 
				return ResponseHandler.generateResponse("Password Not Matched", HttpStatus.UNAUTHORIZED,r);
			}
			
			 
		 }
		 else {
			 //user not found
			 return ResponseHandler.generateResponse("Retailer Not Found", HttpStatus.NOT_FOUND,r);
			 
		 }
	     	    
	    
	 }
		
	@GetMapping("/get-retailer-byId/{id}")
	public ResponseEntity<?> getRetailerById(@PathVariable int id){
		
		Retailer rr = service.getRetailerById(id);
		
		if(rr.getRetailer_id()==0) {
			return ResponseHandler.generateResponse("Retailer Not Found", HttpStatus.NOT_FOUND,rr);
		}else {
			return ResponseHandler.generateResponse("Retailer Detail", HttpStatus.OK,rr);
		}
	}
	
	
	@PutMapping("/update-retailer/{id}")
	public ResponseEntity<?> updateRetailer(@PathVariable int id,@RequestBody Retailer r)
	{
		System.out.println("Inside Controller : "+r);
		// first get Product by id 
		Retailer pp1 =service.getRetailerById(id);
		
		
		System.out.println("Retailer by id : "+pp1);
		
		r.setRetailer_id(pp1.getRetailer_id());
		
		
	
	
		System.out.println("After update c : "+ r);
		
		// then update all fields with new object
		Retailer pp =service.updateRetailer(id, r);
		System.out.println("After Update : "+pp);
		//Product pp =service.addProduct(c);
		return ResponseHandler.generateResponse("Retailer Updated", HttpStatus.OK,pp);
	}

}

