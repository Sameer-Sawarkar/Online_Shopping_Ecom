package com.lti.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lti.beans.Admin;
import com.lti.beans.Retailer;
import com.lti.dao.AdminDao;

@Service("adminService")
public class AdminServiceImpl implements AdminService{

	
	@Autowired
	AdminDao dao;
	
	
	@Override
	public List<Retailer> getRetailerList() {
		// TODO Auto-generated method stub
		return dao.getRetailerList();
	}


	@Override
	public Retailer authenticateRetailer(Retailer r) {
		// TODO Auto-generated method stub
		return dao.authenticateRetailer(r);
	}


	@Override
	public Admin adminEmailExist(String email) {
		// TODO Auto-generated method stub
		return dao.adminEmailExist(email);
	}


	

}
