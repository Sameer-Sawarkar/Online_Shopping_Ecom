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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.lti.beans.Category;
import com.lti.beans.Product;
import com.lti.responsemanager.ResponseHandler;
import com.lti.services.CategoryService;
import com.lti.services.ProductService;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/product-api")
public class ProductController {

	@Autowired
	ProductService service;
	
	
	@PostMapping("/add-product")
	public ResponseEntity<?> addProduct(@RequestBody Product c)
	{
		System.out.println("Inside Controller : "+c);
		Product pp =service.addProduct(c);
		return ResponseHandler.generateResponse("Product Created", HttpStatus.OK,pp);
	}
	
	
	@GetMapping("/get-all-product")
	public ResponseEntity<?> getAllProduct()
	{
		System.out.println("Inside Controller : ");
		List<Product> pp =service.getAllProducts();
		return ResponseHandler.generateResponse("All Products", HttpStatus.OK,pp);
	}
	
//	@GetMapping("/get-all-product")
//	public List<Product> getAllProduct()
//	{
//		System.out.println("Inside Controller : ");
//		List<Product> pp =service.getAllProducts();
//		return pp;
//		//return ResponseHandler.generateResponse("All Products", HttpStatus.OK,pp);
//	}
	
	@GetMapping("/get-product-byid/{id}")
	public ResponseEntity<?> getProductById(@PathVariable int id)
	{
		System.out.println("Inside Controller : ");
		Product pp =service.getProductById(id);
		return ResponseHandler.generateResponse("Product Detail", HttpStatus.OK,pp);
	}
	
	@GetMapping("/get-product-bycategory/{category_id}")
	public ResponseEntity<?> getProductByCategory(@PathVariable int category_id)
	{
		System.out.println("Inside Controller : ");
		List<Product> pp =service.getProductsByCategory(category_id);
		return ResponseHandler.generateResponse("Product By Category", HttpStatus.OK,pp);
	}
	
	
	@PutMapping("/update-product/{id}")
	public ResponseEntity<?> updateProduct(@PathVariable int id,@RequestBody Product c)
	{
		System.out.println("Inside Controller : "+c);
		// first get Product by id 
		Product pp1 =service.getProductById(id);
		
		
		System.out.println("Product by id : "+pp1);
		
		c.setProduct_id(pp1.getProduct_id());
	
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
		
		
		System.out.println("After update c : "+ c);
		
		// then update all fields with new object
		Product pp =service.updateProduct(id, c);
		System.out.println("After Update : "+pp);
		//Product pp =service.addProduct(c);
		return ResponseHandler.generateResponse("Product Updated", HttpStatus.OK,pp);
	}
	
	
	
	@GetMapping("/get-product-by-retailerid/{retailer_id}")
	public ResponseEntity<?> getProductByRetailerid(@PathVariable int retailer_id)
	{
		System.out.println("Inside Controller : ");
		List<Product> pp =service.getProductsByRetailerId(retailer_id);
		return ResponseHandler.generateResponse("Product By Retailer ID", HttpStatus.OK,pp);
	}
	
	
	
}
