package com.brandonlind.vendormanagement.controller;

import java.util.Arrays;
import java.util.List;

import com.brandonlind.vendormanagement.model.Vendor;
import com.brandonlind.vendormanagement.service.VendorRepo;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.skyscreamer.jsonassert.JSONAssert;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

@RunWith(SpringRunner.class)
@WebMvcTest(value = VendorController.class, secure = false)
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
}
