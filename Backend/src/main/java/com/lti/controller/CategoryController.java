package com.lti.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lti.beans.Category;
import com.lti.responsemanager.ResponseHandler;
import com.lti.services.CategoryService;



@CrossOrigin(origins="*")
@RestController
@RequestMapping("/category-api")
public class CategoryController {

	@Autowired
	CategoryService service;
	
	//http://localhost:8090/category-api/add-category
	@PostMapping("/add-category")
	public ResponseEntity<?> addCategory(@RequestBody Category c)
	{
		System.out.println("Inside Controller");
		Category Id=service.addCategory(c);
		return ResponseHandler.generateResponse("Category Created", HttpStatus.OK,Id);
	}
	
	//http://localhost:8090/category-api/get-category-list
	@GetMapping("/get-category-list")
	public ResponseEntity<?> getCategoryList() {
		List<Category> catList= service.getCategoryList();
		return ResponseHandler.generateResponse("Category List", HttpStatus.OK,catList);
	}
}