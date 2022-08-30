package com.lti.onlineshop;

import static org.junit.jupiter.api.Assertions.*;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import com.lti.beans.Category;
import com.lti.dao.CategoryDao;

@ExtendWith(SpringExtension.class)
@SpringBootTest
class CategoryDaoTest {
	
	@Autowired
	CategoryDao dao;
	
	Category category = new Category(0,"clothing","for everyone");


	@Test
	public void testAddCategory()
	{
		Category addedCategory = dao.addCategory(category);
		assertEquals(addedCategory, category);
	}
	
	@Test
	public void testGetCategoryList()
	{
		List<Category> categoryList = dao.getCategoryList();
		assertTrue(categoryList.size()>0);
	}
	/*
	 * @Test void test() { fail("Not yet implemented"); }
	 */

}

