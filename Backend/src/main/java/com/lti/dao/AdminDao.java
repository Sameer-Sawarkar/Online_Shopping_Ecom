package com.lti.dao;

import java.util.List;

import com.lti.beans.Admin;
import com.lti.beans.Retailer;

public interface AdminDao {

	public List<Retailer> getRetailerList();
	public Retailer authenticateRetailer(Retailer r);
	public Admin adminEmailExist(String email);
	
	Admin registerAdmin(Admin admin);
}
