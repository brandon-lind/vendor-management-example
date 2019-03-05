package com.brandonlind.vendormanagement.data;

import java.util.UUID;

import org.springframework.data.repository.CrudRepository;

public interface VendorRepo extends CrudRepository<Vendor, UUID> {

}
