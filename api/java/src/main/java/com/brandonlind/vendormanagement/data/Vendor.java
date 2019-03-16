package com.brandonlind.vendormanagement.data;

import java.util.Date;
import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.vividsolutions.jts.geom.Geometry;


@Entity
public class Vendor {
	@Id
	@JsonIgnore
	private UUID id;

	@NotNull(message="The vendor code is required")
	@Size(min=6,max=6,message="The vendor code must be exactly 6 characters")
	private String code;
	
	@NotBlank(message="The vendor name cannot be blank")
	@NotNull(message="The vendor name is required")
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

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
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
