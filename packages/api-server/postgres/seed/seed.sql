-- Seed data with a fake user for testing, all password hashes are equivalent to 123456 as password
begin TRANSACTION;

insert into users (name, email, entries, age, pet, joined) values ('Mehrdad', 'mehrdad@gmail.com', 1, 29, 'Samoyed', '2020-07-22');
insert into users (name, email, entries, pet, joined) values ('Jack', 'jackjack@yahoo.com', 3, 'Cosmo', '2020-07-14');
insert into users (name, email, entries, age, pet, joined) values ('Mary', 'mary@gmail.com', 4, 34, 'Cat', '2020-06-03');
insert into login (hash, email) values ('$2a$10$DWKIF7/Wp2p0k0SDMs2Vqeug2Y0WjfG1aToUKGLBGQQaRaCntm.W6', 'mehrdad@gmail.com');
insert into login (hash, email) values ('$2a$10$DWKIF7/Wp2p0k0SDMs2Vqeug2Y0WjfG1aToUKGLBGQQaRaCntm.W6', 'jackjack@yahoo.com');
insert into login (hash, email) values ('$2a$10$DWKIF7/Wp2p0k0SDMs2Vqeug2Y0WjfG1aToUKGLBGQQaRaCntm.W6', 'mary@gmail.com');

COMMIT;