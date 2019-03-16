package com.brandonlind.vendormanagement;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
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
		List<Vendor> response = new ArrayList<Vendor>();
		
		try {
			for(Vendor vendor : repo.findAllByAndDeletedAtIsNull()) {
				response.add(vendor);
			}
			
			return new ResponseEntity<List<Vendor>>(response, HttpStatus.OK);
		} catch(Exception ex) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@RequestMapping(value = "/{code}", method = RequestMethod.GET)
	public ResponseEntity<Vendor> byCode(@PathVariable String code) {
		try {
			Vendor vendor = repo.findByCodeAndDeletedAtIsNull(code);

			if(vendor == null) { 
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}

			return new ResponseEntity<Vendor>(vendor, HttpStatus.OK);
		} catch(Exception ex) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@RequestMapping(value = "/", method = RequestMethod.POST)
	public ResponseEntity<Vendor> add(@RequestBody @Valid Vendor vendor) {
		try {
			vendor.setId(UUID.randomUUID());

			// Make sure they don't try add an already deleted vendor (move to service layer eventually)
			vendor.setDeletedAt(null);
			
			Vendor response = repo.save(vendor);
			
			return new ResponseEntity<Vendor>(response, HttpStatus.CREATED);
		} catch(Exception ex) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@RequestMapping(value = "/", method = RequestMethod.PUT)
	public ResponseEntity<Vendor> update(@RequestBody @Valid Vendor vendor) {
		try {
			Vendor existingVendor = repo.findByCodeAndDeletedAtIsNull(vendor.getCode());

			if(existingVendor == null) {
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
			
			// Only allow changing of these properties (move to service layer eventually)
			existingVendor.setName(vendor.getName());
			existingVendor.setLocation(vendor.getLocation());

			repo.save(existingVendor);
			
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);	
		} catch(Exception ex) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@RequestMapping(value = "/{code}", method = RequestMethod.DELETE)
	public ResponseEntity<Vendor> remove(@PathVariable String code) {
		try {
			Vendor vendor = repo.findByCodeAndDeletedAtIsNull(code);

			if(vendor == null) { 
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}

			vendor.setDeletedAt(new Date());
			repo.save(vendor);
			
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch(Exception ex) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
