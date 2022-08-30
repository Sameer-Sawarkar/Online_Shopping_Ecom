package com.lti.onlineshop;

import static org.junit.jupiter.api.Assertions.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import com.lti.beans.Retailer;
import com.lti.dao.RetailerDao;
import com.lti.services.RetailerService;


@ExtendWith(SpringExtension.class)
@SpringBootTest
class RetailerServiceTest {
	
	@Autowired
	RetailerService service;
	
	@MockBean
	RetailerDao dao;
	
	Retailer retailer = new Retailer(1111,"Kiara","Kohinoor","kiara@gmail.com",859747,"KairaKohinoor",true,"Patna");
	Retailer retailer2 = new Retailer(1112,"Mukta","Dmart","mukta@gmail.com",749547,"MuktaDmart",true,"Lucknow");

	@Test
	public void testRegisterRetailer()
	{
		Mockito.when(dao.registerRetailer(retailer)).thenReturn(retailer);
		assertEquals(service.registerRetailer(retailer), retailer);		
	}
	

	@Test
	public void testGetRetailer()
	{
		List<Retailer> retailerList = new ArrayList<Retailer>();
		retailerList.add(retailer);
		retailerList.add(retailer2);
		Mockito.when(dao.getRetailer()).thenReturn(retailerList);
		assertEquals(service.getRetailer(), retailerList);
	}
	
	@Test
	public void testRetailerEmailExit()
	{
		Mockito.when(dao.retailerEmailExist(retailer.getEmail())).thenReturn(retailer);
		assertEquals(service.retailerEmailExist(retailer.getEmail()), retailer);
		assertNotNull(service.retailerEmailExist(retailer.getEmail()));
	}

	/*
	 * @Test void test() { fail("Not yet implemented"); }
	 */

}