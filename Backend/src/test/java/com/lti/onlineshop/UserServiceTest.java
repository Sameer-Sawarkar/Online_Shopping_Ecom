package com.lti.onlineshop;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import com.lti.beans.User;
import com.lti.dao.UserDao;
import com.lti.excep.UserException;
import com.lti.services.UserService;

@ExtendWith(SpringExtension.class)
@SpringBootTest
class UserServiceTest {
	
	@Autowired
	UserService service;
	
	@MockBean
	UserDao dao;
	
	User user = new User(111,"Akash","akash@gmail.com","9988776655","Akash@123","DFGn6gvb","Warangal","Male","21/05/2022");

	
	@Test
	public void testRegisterUser() throws UserException
	{
		Mockito.when(dao.registerUser(user)).thenReturn(user);
		assertEquals(service.registerUser(user), user);		
	}
	
	@Test
	public void testLoginUser() throws UserException
	{
		Mockito.when(dao.loginUser(user)).thenReturn(user);
		assertEquals(service.loginUser(user), null);//the dao layer returns null when user logged in 
		assertNull(service.loginUser(user));
		
	}
	
	@Test
	public void testUserEmailExit() throws UserException
	{
		Mockito.when(dao.userEmailExist(user.getEmail())).thenReturn(user);
		assertEquals(service.userEmailExist(user.getEmail()), user);
		assertNotNull(service.userEmailExist(user.getEmail()));
	}

	/*
	 * @Test void test() { fail("Not yet implemented"); }
	 */

}