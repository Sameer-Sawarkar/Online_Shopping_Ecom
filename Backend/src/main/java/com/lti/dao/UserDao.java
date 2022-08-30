package com.lti.dao;

import com.lti.beans.User;
import com.lti.excep.UserException;

public interface UserDao {

	public User registerUser(User u) throws UserException;
	public User userEmailExist(String email) throws UserException;
	public User getUserById(int id)throws UserException;
	public User loginUser(User u)throws UserException;
	User updateUser(int id, User u)throws UserException;
	
}
