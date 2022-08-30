package com.lti.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lti.beans.Product;
import com.lti.beans.User;
import com.lti.dao.UserDao;
import com.lti.excep.UserException;


@Service("userService")
public class UserServiceImpl implements UserService {

	@Autowired
	UserDao dao;
	
	
	
	@Override
	public User registerUser(User u) throws UserException {
		// TODO Auto-generated method stub
		
		System.out.println("In user Service : "+u);
		
		//call dao
		User user = dao.registerUser(u);
		
		System.out.println(user);
		
		return user;
	}



	@Override
	public User loginUser(User u) throws UserException {
		
		System.out.println("In user Service : "+u);
		
		//call dao
		User user = dao.registerUser(u);
		
		System.out.println(user);
		
		return user;
	}



	@Override
	public User userEmailExist(String email)  throws UserException{
		// TODO Auto-generated method stub
		User userExist = dao.userEmailExist(email); 
		return userExist;
	}



	@Override
	public User getUserById(int id) throws UserException {
		// TODO Auto-generated method stub
		return dao.getUserById(id);
	}
	
	
	@Override
	public User updateUser(int id, User u) throws UserException {
		// TODO Auto-generated method stub
		return dao.updateUser(id, u);
	}



}
