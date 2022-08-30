package com.lti.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lti.beans.Category;
import com.lti.dao.CategoryDao;

@Service("categoryService")
public class CategoryServiceImpl implements CategoryService{

	@Autowired
	CategoryDao dao;
	
	@Override
	public Category addCategory(Category c) {
		// TODO Auto-generated method stub
		return dao.addCategory(c);
	}

	@Override
	public List<Category> getCategoryList() {
		// TODO Auto-generated method stub
		return dao.getCategoryList();
	}

}
