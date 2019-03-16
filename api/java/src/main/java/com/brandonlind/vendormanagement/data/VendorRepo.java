package com.brandonlind.vendormanagement.data;

import java.util.UUID;

import org.springframework.data.repository.CrudRepository;

public interface VendorRepo extends CrudRepository<Vendor, UUID> {
  boolean existsByIdAndDeletedAtIsNull(UUID id);
  Iterable<Vendor> findAllByAndDeletedAtIsNull();
  Vendor findByIdAndDeletedAtIsNull(UUID id);
  Vendor findByCodeAndDeletedAtIsNull(String code);
}
