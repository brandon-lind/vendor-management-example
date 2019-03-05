package com.brandonlind.vendormanagement.data;

import java.util.Date;
import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;

import com.vividsolutions.jts.geom.Geometry;


@Entity
public class Vendor {
	@Id
	private UUID id;
	
	@NotBlank
	private String name;
	
	@Column(columnDefinition = "Geometry")
	private Geometry location;
	
	private Date deletedAt;
	
	
	public UUID getId() {
		return id;
	}

	public void setId(UUID id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Geometry getLocation() {
		return location;
	}

	public void setLocation(Geometry location) {
		this.location = location;
	}

	public Date getDeletedAt() {
		return deletedAt;
	}

	public void setDeletedAt(Date deletedAt) {
		this.deletedAt = deletedAt;
	}

	
	
}
