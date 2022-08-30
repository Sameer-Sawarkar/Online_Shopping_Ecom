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
import com.lti.dao.CategoryDao;
import com.lti.services.CategoryService;


@ExtendWith(SpringExtension.class)
@SpringBootTest
class CategoryServiceTest {
	
	@Autowired
	CategoryService service;
	
	@MockBean
	CategoryDao dao;
	
	Category category1 = new Category(1,"clothing","for everyone");
	Category category2 = new Category(2,"Accessories","belts,purse,earings");

	
	@Test
	public void testAddCategory()
	{
		Mockito.when(dao.addCategory(category1)).thenReturn(category1);
		assertEquals(service.addCategory(category1), category1);
	}
	
	
	@Test
	public void testGetCategoryList()
	{
		List<Category> categoryList = new ArrayList<Category>();
		categoryList.add(category1);
		categoryList.add(category2);
		Mockito.when(dao.getCategoryList()).thenReturn(categoryList);
		assertEquals(service.getCategoryList(), categoryList);
	}

	/*
	 * @Test void test() { fail("Not yet implemented"); }
	 */

}