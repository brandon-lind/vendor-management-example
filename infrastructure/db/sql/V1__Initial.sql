create table vendor
(
	id uuid not null,
	name varchar(255) not null,
	location geometry,
	deleted_at timestamp
);

create unique index vendor_id_uindex
	on vendor (id);

alter table vendor
	add constraint vendor_pk
		primary key (id);
