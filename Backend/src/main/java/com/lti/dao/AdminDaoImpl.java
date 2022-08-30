package com.lti.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.lti.beans.Admin;
import com.lti.beans.Product;
import com.lti.beans.Retailer;

@Repository
public class AdminDaoImpl implements AdminDao{

	@PersistenceContext
	private EntityManager em;
	
	@Override
	@Transactional
	public Admin registerAdmin(Admin admin) {
		// TODO Auto-generated method stub
		System.out.println("Inside Retailer Dao");
		em.persist(admin);
		return admin;
	}
	
	@Override
	public List<Retailer> getRetailerList() {
		
		Query qry=em.createQuery("Select r from Retailer r");
		List<Retailer> retailerList=qry.getResultList();
		
		
		// TODO Auto-generated method stub
		return retailerList;
	}


	@Override
	@Transactional
	public Retailer authenticateRetailer(Retailer r) {
		// TODO Auto-generated method stub
		
		
		System.out.println("In Dao retailer object : "+r);
		
		int rid = r.getRetailer_id();
		boolean authStatus = r.isAuthenticate();
		
		Query qr = em.createQuery("update Retailer e set e.authenticate=:authStatus where e.retailer_id=:temp");
		qr.setParameter("authStatus", r.isAuthenticate());
		qr.setParameter("temp", r.getRetailer_id());
		
		int result = qr.executeUpdate();
		
		System.out.println(result);
		//return new Retailer();
		//return new Retailer();
		
		
		
		
		TypedQuery<Retailer> qr1 = em.createQuery("select p from Retailer p where p.retailer_id=:newId",Retailer.class);
		qr1.setParameter("newId", r.getRetailer_id());
		
		
		List<Retailer> retailerList = qr1.getResultList();
		
		if(retailerList.size()>0) {
			System.out.println(retailerList);
			return retailerList.get(0);
		}else {
			return new Retailer();
		}
		
	}


	@Override
	public Admin adminEmailExist(String email) {
		System.out.println("In admin dao : "+email);
		TypedQuery<Admin> qr = em.createQuery("select a from Admin a where a.email=:email_id",Admin.class);
		qr.setParameter("email_id", email);
		List<Admin> adminList = qr.getResultList();
		System.out.println(adminList);
		
		if(adminList.size()==0) {
			return new Admin();
		}else {
			Admin temp = adminList.get(0);

			return temp;
		}
	}
	
	
	
	
	
	

}
