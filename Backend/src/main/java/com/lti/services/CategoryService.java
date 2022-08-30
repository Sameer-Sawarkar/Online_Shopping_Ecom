package com.lti.services;

import java.util.List;

import com.lti.beans.Category;


public interface CategoryService {
	
	Category addCategory(Category c);
	List<Category> getCategoryList();
	

}
