package com.lti.services;

import org.springframework.stereotype.Service;

import com.lti.beans.User;
import com.lti.excep.UserException;

@Service("userService")
public interface UserService {

	public User userEmailExist(String email) throws UserException;
	public User registerUser(User u) throws UserException;
	public User getUserById(int id) throws UserException;
	public User loginUser(User u) throws UserException;
	User updateUser(int id, User u) throws UserException;
	
}
