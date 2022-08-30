package com.lti.dao;

import java.util.List;

import com.lti.beans.Retailer;

public interface RetailerDao {
	
	Retailer registerRetailer(Retailer retailer);	
//	loginRetailer()	
	int updateRetProfile(Retailer retailer);	
	List<Retailer> getRetailer();	
	public Retailer getRetailerById(int id);
	public Retailer retailerEmailExist(String email);
	Retailer updateRetailer(int id, Retailer r);
}