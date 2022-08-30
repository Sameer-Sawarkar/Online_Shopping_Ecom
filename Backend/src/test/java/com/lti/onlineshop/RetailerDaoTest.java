package com.lti.onlineshop;

import static org.junit.jupiter.api.Assertions.*;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import com.lti.beans.Retailer;
import com.lti.dao.RetailerDao;

@ExtendWith(SpringExtension.class)
@SpringBootTest
class RetailerDaoTest {
	
	@Autowired
	RetailerDao dao;
	
	Retailer retailer = new Retailer(0,"Kiara","Kohinoor","kiara@gmail.com",859747,"KairaKohinoor",true,"Patna");


	@Test
	public void testRegisterRetailer()
	{
		Retailer registeredRetailer = dao.registerRetailer(retailer);
		assertEquals(registeredRetailer, retailer);
	}
	
	@Test
	public void testGetRetailer()
	{
		List<Retailer> retailerList= dao.getRetailer();
		assertTrue(retailerList.size()>0);
	}
	
	@Test
	public void testRetailerEmailExists()
	{
		Retailer tempRetailer = dao.retailerEmailExist(retailer.getEmail());
		// if email already exists then returns already presented Retailer
		assertNotEquals(tempRetailer, retailer);
		// if email not exits then new Retailer() returns
		
		
	}
	/*
	 * @Test void test() { fail("Not yet implemented"); }
	 */

}