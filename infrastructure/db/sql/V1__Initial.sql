create table vendors
(
	id uuid not null,
	name varchar(255) not null,
	location geometry,
	deletedAt timestamp
);

create unique index vendors_id_uindex
	on vendors (id);

alter table vendors
	add constraint vendors_pk
		primary key (id);
