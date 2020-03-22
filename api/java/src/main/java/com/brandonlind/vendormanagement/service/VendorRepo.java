package com.brandonlind.vendormanagement.service;

import java.util.UUID;

import org.springframework.data.repository.CrudRepository;

import com.brandonlind.vendormanagement.model.Vendor;

public interface VendorRepo extends CrudRepository<Vendor, UUID> {
  boolean existsByIdAndDeletedAtIsNull(UUID id);
  Iterable<Vendor> findAllByAndDeletedAtIsNull();
  Vendor findByIdAndDeletedAtIsNull(UUID id);
  Vendor findByCodeAndDeletedAtIsNull(String code);
}
