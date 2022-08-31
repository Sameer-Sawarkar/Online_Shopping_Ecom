package com.lti.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lti.beans.Admin;
import com.lti.beans.Category;
import com.lti.beans.Retailer;
import com.lti.dao.AdminDao;
import com.lti.responsemanager.ResponseHandler;
import com.lti.services.AdminService;
import com.lti.services.CategoryService;
import com.lti.services.RetailerService;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/admin-api")
public class AdminController {

	
	@Autowired
	AdminService service;
	
	@Autowired
	RetailerService retailerService;
	
	@Autowired
	AdminDao adminDao;
	
	@PostMapping("/register-admin")
	 public ResponseEntity<?>  registerUser(@RequestBody Admin r)
	 {
		 System.out.println("from postman : "+r);
		 
		 Admin exists = service.adminEmailExist(r.getEmail());
		 
		 
		 
		 if(exists.getAdmin_id()!=0) {
			 return ResponseHandler.generateResponse("Admin Already Exixts", HttpStatus.CONFLICT,r);
			 //return new ResponseEntity<>("User Already Exixts", HttpStatus.CONFLICT);
			 
		 }
		 else {
			 Admin admin = adminDao.registerAdmin(r);
			 
			 return ResponseHandler.generateResponse("Registered Successfully", HttpStatus.OK,admin);
			
		 }
	     
	 }
	
	
	@PostMapping("/login-admin")
	 public ResponseEntity<?> loginAdmin(@RequestBody Admin a)
	 {
		System.out.println("from body : "+a);
		
		Admin exists = service.adminEmailExist(a.getEmail());
		
		System.out.println("Admin exists:"+exists.getPassword());
		System.out.println("body user:"+a.getPassword());
		
		if(exists.getAdmin_id()!=0) {
			// user found
			//check password
			if(a.getPassword().equals(exists.getPassword())) {
				
				return ResponseHandler.generateResponse("Admin Login Successful!", HttpStatus.OK,exists);
			}
			else {
				//password matched 
				return ResponseHandler.generateResponse("Password Not Matched", HttpStatus.UNAUTHORIZED,a);
			}
			
			 
		 }
		 else {
			 //user not found
			 return ResponseHandler.generateResponse("Admin Not Found", HttpStatus.NOT_FOUND,a);
			 
		 }
	     	    
	    
	 }
	
	
	@GetMapping("/get-all-retailers")
	public ResponseEntity<?> getAllRetailers()
	{
		System.out.println("Inside Controller");
		List<Retailer> retailerList = service.getRetailerList();
		
		return ResponseHandler.generateResponse("All Retailers", HttpStatus.OK,retailerList);
	}
	
	@PostMapping("/authenticate-retailer")
	public ResponseEntity<?> authenticateRetailer(@RequestBody Retailer r)
	{
		System.out.println("Inside Controller");
		
		boolean authStatus = r.isAuthenticate();
		int rId = r.getRetailer_id();
		
		System.out.println("retailer status from body : "+authStatus);
		
		
		Retailer rr = service.authenticateRetailer(r);
		
		
		
		return ResponseHandler.generateResponse("Retailer Updated", HttpStatus.OK,rr);
	}
	
	
	@GetMapping("/get-retailer-by-id/{id}")
	public ResponseEntity<?> getRetailerById(@PathVariable int id){
		
		Retailer rr = retailerService.getRetailerById(id);
		
		if(rr.getRetailer_id()==0) {
			return ResponseHandler.generateResponse("Retailer Not Found", HttpStatus.NOT_FOUND,rr);
		}else {
			return ResponseHandler.generateResponse("Retailer Detail", HttpStatus.OK,rr);
		}
	}
	
	
}
