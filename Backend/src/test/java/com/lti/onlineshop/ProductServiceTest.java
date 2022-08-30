package com.lti.onlineshop;

import static org.junit.jupiter.api.Assertions.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import com.lti.beans.Category;
import com.lti.beans.Product;
import com.lti.beans.Retailer;
import com.lti.dao.ProductDao;

import com.lti.services.ProductService;


@ExtendWith(SpringExtension.class)
@SpringBootTest
class ProductServiceTest {
	
	@Autowired
	ProductService service;
	
	@MockBean
	ProductDao dao;

	Category category1 = new Category(1,"clothing","for everyone");
	Retailer retailer1 = new Retailer(1111,"Kiara","Kohinoor","kiara@gmail.com",859747,"KairaKohinoor",true,"Patna");
	Product product1 = new Product(1,"Nebora Leather Belt","Formal Belt With Branded Pinup Buckle",1249,9,true,"../assets/images/29.jpeg",category1,retailer1);
	Product product2 = new Product(12,"Drizzle Gemstone Drop Earrings","We believe a pair of lightweight, easy earrings are just what you need to conquer the week. Throw them on, and off you go!",3499,10,true,"../assets/images/29.jpeg",category1,retailer1);

	
	
	@Test
	public void testAddProduct()
	{
		Mockito.when(dao.addProduct(product1)).thenReturn(product1);
		assertEquals(service.addProduct(product1), product1);
		assertEquals(product1.getCategory().getCategory_id(), category1.getCategory_id());
		assertEquals(product1.getRetailer().getRetailer_id(), retailer1.getRetailer_id());
	}
	
	@Test
	public void testGetAllProducts()
	{
		List<Product> productList = new ArrayList<Product>();
		productList.add(product1);
		productList.add(product2);
		Mockito.when(dao.getAllProducts()).thenReturn(productList);
		assertEquals(service.getAllProducts(), productList);
	}
	
	@Test
	public void testGetProductByCategory()
	{
		List<Product> productList = new ArrayList<Product>();
		productList.add(product1);
		Mockito.when(dao.getProductsByCategory(product1.getCategory().getCategory_id())).thenReturn(productList);
		int category_id=product1.getCategory().getCategory_id();
		assertEquals(service.getProductsByCategory(category_id),productList);
	}
	
	@Test
	public void testGetProductById()
	{
		product1.setName("Akash");
		Mockito.when(dao.getProductById(product1.getProduct_id())).thenReturn(product1);
		assertEquals(service.getProductById(product1.getProduct_id()), product1);
		assertEquals(product1.getName(), "Akash");
	}
	
	@Test
	public void testUpdateProduct()
	{
		Mockito.when(dao.updateProduct(product1.getProduct_id(), product1)).thenReturn(product1);
		assertEquals(dao.updateProduct(product1.getProduct_id(), product1), product1);
//		service.updateProduct(product1.getProduct_id(), product1)
	}
	
	
	/*
	 * @Test void test() { fail("Not yet implemented"); }
	 */

}