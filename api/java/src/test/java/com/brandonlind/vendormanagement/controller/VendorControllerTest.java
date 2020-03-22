package com.brandonlind.vendormanagement.controller;

import static org.junit.Assert.assertEquals;

import java.util.Arrays;
import java.util.List;
import java.util.UUID;

import com.brandonlind.vendormanagement.model.Vendor;
import com.brandonlind.vendormanagement.service.VendorRepo;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.vividsolutions.jts.geom.Coordinate;
import com.vividsolutions.jts.geom.Geometry;
import com.vividsolutions.jts.geom.GeometryFactory;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.skyscreamer.jsonassert.JSONAssert;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

@RunWith(SpringRunner.class)
@WebMvcTest(value = VendorController.class)
@EnableAutoConfiguration()
public class VendorControllerTest {

	@Autowired
	private MockMvc mockMvc;

	@MockBean
	private VendorRepo repo;

	@Test
	public void getAllVendors() throws Exception {
		// Setup the mock returned objects
		List<Vendor> mockVendors = Arrays.asList(new Vendor(), new Vendor());

		// Mock out the repo method response
		Mockito.when(repo.findAllByAndDeletedAtIsNull()).thenReturn(mockVendors);

		// Stub out the request
		RequestBuilder request = MockMvcRequestBuilders.get("/").accept(MediaType.APPLICATION_JSON);

		// Execute
		MvcResult response = mockMvc.perform(request).andReturn();

		// Validate result of the response
		String expected = "[{},{}]";
		String actual = response.getResponse().getContentAsString();

		JSONAssert.assertEquals(expected, actual, false);
	}

//	@Test
//	public void addVendor() throws Exception {
//		// Setup mock objects
//		UUID vendorId = UUID.randomUUID();
//		GeometryFactory geometryFactory = new GeometryFactory();
//		Geometry vendorLocation = geometryFactory.createPoint(new Coordinate(30.466481, -97.844618));
//		Vendor mockVendor = new Vendor(vendorId,"TEST01","Test Vendor",vendorLocation,null);
//		Vendor requestVendor = new Vendor(null, "TEST01","Test Vendor", vendorLocation, null);
//		String requestJson = new ObjectMapper().writeValueAsString(requestVendor);
//		
//		Mockito.when(repo.save(Mockito.any(Vendor.class))).thenReturn(mockVendor);
//		
//		RequestBuilder request = MockMvcRequestBuilders.post("/")
//				.accept(MediaType.APPLICATION_JSON)
//				.content(requestJson)
//				.contentType(MediaType.APPLICATION_JSON);
//		
//		MvcResult result = mockMvc.perform(request).andReturn();
//		
//		MockHttpServletResponse response = result.getResponse();
//		
//		assertEquals(HttpStatus.CREATED.value(), response.getStatus());
//		assertEquals("http://localhost/TEST01", response.getHeader(HttpHeaders.LOCATION));
//	}
}
