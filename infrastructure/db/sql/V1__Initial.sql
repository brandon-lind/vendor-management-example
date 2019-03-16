create table vendor
(
	id uuid not null,
	code varchar(6) not null,
	name varchar(255) not null,
	location geometry,
	deleted_at timestamp
);

create unique index vendor_id_uindex
	on vendor (id);

create unique index vendor_code_uindex
	on vendor (code);

alter table vendor
	add constraint vendor_pk
		primary key (id);
