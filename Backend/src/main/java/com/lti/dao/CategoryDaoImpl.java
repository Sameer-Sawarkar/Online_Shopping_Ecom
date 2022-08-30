package com.lti.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.lti.beans.Category;

@Repository
public class CategoryDaoImpl implements CategoryDao{

	
	@PersistenceContext
	private EntityManager em;
	
	
	@Override
	@Transactional
	public Category addCategory(Category c) {
		// TODO Auto-generated method stub
		
		System.out.println(" Inside Dao method");		
		em.persist(c);	
		return c;
	}

	@Override
	public List<Category> getCategoryList() {
		Query qry=em.createQuery("Select c from Category c");
		List<Category> catList=qry.getResultList();
		return catList;
	}

	
}
