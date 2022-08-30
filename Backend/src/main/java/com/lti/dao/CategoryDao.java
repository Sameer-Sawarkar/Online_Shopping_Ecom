package com.lti.dao;

import java.util.List;

import com.lti.beans.Category;


public interface CategoryDao {
	
	Category addCategory(Category c);
	List<Category> getCategoryList();
	

}
