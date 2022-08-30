package com.lti.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lti.beans.Retailer;
import com.lti.beans.User;
import com.lti.dao.RetailerDao;


@Service("retailerService")
public class RetailerServiceImpl implements RetailerService{
	
	@Autowired
	RetailerDao dao;

	@Override
	public Retailer registerRetailer(Retailer retailer) {
		return dao.registerRetailer(retailer);
	}

	@Override
	public int updateRetProfile(Retailer retailer) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<Retailer> getRetailer() {
		// TODO Auto-generated method stub
		List<Retailer> retList=dao.getRetailer();
		return retList;
	}

	@Override
	public Retailer retailerEmailExist(String email) {
		// TODO Auto-generated method stub
		Retailer retailerExist = dao.retailerEmailExist(email); 
		return retailerExist;
		
	}

	@Override
	public Retailer getRetailerById(int id) {
		// TODO Auto-generated method stub
		return dao.getRetailerById(id);
	}
	
	
	@Override
	public Retailer updateRetailer(int id, Retailer r) {
		// TODO Auto-generated method stub
		return dao.updateRetailer(id, r);
	}

	

}
