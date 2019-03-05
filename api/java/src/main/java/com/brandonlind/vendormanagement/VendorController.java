package com.brandonlind.vendormanagement;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.brandonlind.vendormanagement.data.Vendor;
import com.brandonlind.vendormanagement.data.VendorRepo;

@RestController
public class VendorController {
	@Autowired
	VendorRepo repo;

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public ResponseEntity<List<Vendor>> index() {
		List<Vendor> vendors = new ArrayList<Vendor>();
		
		for(Vendor vendor : repo.findAll()) {
			vendors.add(vendor);
		}
		
		return new ResponseEntity<List<Vendor>>(vendors, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/", method = RequestMethod.POST)
	public ResponseEntity<Vendor> add(@RequestBody Vendor vendor) {
		vendor.setId(UUID.randomUUID());
		
		repo.save(vendor);
		
		return new ResponseEntity<Vendor>(vendor, HttpStatus.CREATED);
	}
}
