package com.lti.onlineshop;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import com.lti.beans.User;
import com.lti.dao.UserDao;
import com.lti.excep.UserException;

@ExtendWith(SpringExtension.class)
@SpringBootTest
class UserDaoTest {
	
	@Autowired
	UserDao dao;
	
	User user = new User(0,"Akash","akashini@gmail.com","9988776655","Akash@123","DFGn6gvb","Warangal","Male","21/05/2022");

	
	@Test
	public void testRegisterUser() throws UserException
	{
		User registeredUser = dao.registerUser(user);
		assertEquals(registeredUser.getId(), user.getId());
	}

	@Test
	public void testLoginUser() throws UserException
	{
		User loggedUser = dao.loginUser(user);
		assertNull(loggedUser);
	}
	
	@Test
	public void testuserEmailExist() throws UserException
	{
		User tempUser = dao.userEmailExist(user.getEmail());
		//if email exists returns already presented email
		assertNotEquals(tempUser, user);
		//if email not exists returns new User()
	}
	/*
	 * @Test void test() { fail("Not yet implemented"); }
	 */

}