package com.lti.services;

import java.util.List;

import com.lti.beans.Admin;
import com.lti.beans.Retailer;

public interface AdminService {

	public List<Retailer> getRetailerList();
	public Retailer authenticateRetailer(Retailer r);
	public Admin adminEmailExist(String email);
	
}
