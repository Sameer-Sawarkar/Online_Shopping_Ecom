package com.lti.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lti.beans.Product;
import com.lti.dao.CategoryDao;
import com.lti.dao.ProductDao;

@Service("productService")
public class ProductServiceImpl implements ProductService{

	
	@Autowired
	ProductDao dao;
	
	@Override
	public Product addProduct(Product p) {
		// TODO Auto-generated method stub
		return dao.addProduct(p);
	}

	@Override
	public List<Product> getAllProducts() {
		// TODO Auto-generated method stub
		return dao.getAllProducts();
	}

	@Override
	public List<Product> getProductsByCategory(int category_id) {
		// TODO Auto-generated method stub
		return dao.getProductsByCategory(category_id);
	}

	@Override
	public Product getProductById(int id) {
		// TODO Auto-generated method stub
		return dao.getProductById(id);
	}

	@Override
	public Product updateProduct(int id, Product p) {
		// TODO Auto-generated method stub
		return dao.updateProduct(id, p);
	}

	@Override
	public List<Product> getProductsByRetailerId(int retailer_id) {
		// TODO Auto-generated method stub
		return dao.getProductsByRetailerId(retailer_id);
	}

	@Override
	public Product deleteProduct(int id) {
		// TODO Auto-generated method stub
		return dao.deleteProduct(id);
	}

	
}
