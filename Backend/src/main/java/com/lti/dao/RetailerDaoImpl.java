package com.lti.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.lti.beans.Retailer;
import com.lti.beans.User;

@Repository
public class RetailerDaoImpl implements RetailerDao{
	
	@PersistenceContext
	private EntityManager em;

	@Override
	@Transactional
	public Retailer registerRetailer(Retailer retailer) {
		// TODO Auto-generated method stub
		System.out.println("Inside Retailer Dao");
		em.persist(retailer);
		return retailer;
	}

	@Override
	public int updateRetProfile(Retailer retailer) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<Retailer> getRetailer() {
		// TODO Auto-generated method stub
		Query qry=em.createQuery("Select r from Retailer r");
		List<Retailer> retailerList=qry.getResultList();
		return retailerList;
	}

	@Override
	public Retailer retailerEmailExist(String email) {
		TypedQuery<Retailer> qr = em.createQuery("select r from Retailer r where r.email=:email",Retailer.class);
		qr.setParameter("email", email);
		List<Retailer> RetailerList = qr.getResultList();
		System.out.println(RetailerList);
		
		if(RetailerList.size()==0) {
			return new Retailer();
		}else {
			Retailer temp = RetailerList.get(0);

			return temp;
		}
		
	}

	@Override
	public Retailer getRetailerById(int id) {
		TypedQuery<Retailer> qr = em.createQuery("select r from Retailer r where r.retailer_id=:id",Retailer.class);
		qr.setParameter("id", id);
		List<Retailer> RetailerList = qr.getResultList();
		System.out.println(RetailerList);
		
		if(RetailerList.size()==0) {
			return new Retailer();
		}else {
			Retailer temp = RetailerList.get(0);

			return temp;
		}
	}
	
	
	
	@Override
	@Transactional
	public Retailer updateRetailer(int id, Retailer r) {
		// TODO Auto-generated method stub
		System.out.println(" Inside Dao method : "+r);	
		Retailer pp = em.merge(r);
		//TypedQuery<Product> qr = em.createQuery("update Product p where p.product_id=:id",Product.class);
		//qr.setParameter("id", id);
		
		
		//em.persist(p);	
		return pp;
		
		
		
		
	}

}