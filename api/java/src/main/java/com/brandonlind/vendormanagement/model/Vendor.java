package com.brandonlind.vendormanagement.model;

import java.util.Date;
import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.bedatadriven.jackson.datatype.jts.serialization.GeometryDeserializer;
import com.bedatadriven.jackson.datatype.jts.serialization.GeometrySerializer;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.vividsolutions.jts.geom.Geometry;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class Vendor {
	@Id
	@JsonIgnore
	@Getter @Setter
	private UUID id;

	@NotNull(message = "The vendor code is required")
	@Size(min = 6, max = 6, message = "The vendor code must be exactly 6 characters")
	@Getter @Setter
	private String code;

	@NotBlank(message = "The vendor name cannot be blank")
	@NotNull(message = "The vendor name is required")
	@Getter @Setter
	private String name;

	@Column(columnDefinition = "Geometry")
	@Getter @Setter
	@JsonSerialize(using = GeometrySerializer.class)
    @JsonDeserialize(contentUsing = GeometryDeserializer.class)
	private Geometry location;

	@Getter @Setter
	private Date deletedAt;
}
