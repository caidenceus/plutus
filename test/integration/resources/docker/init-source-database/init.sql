DROP TABLE IF EXISTS integration;
CREATE TABLE integration (
    username      TEXT NOT NULL PRIMARY KEY,
    password      TEXT NOT NULL,
    email         TEXT NOT NULL
);

INSERT INTO integration VALUES ('testuser1', 'secure_password', 'test1@test.com');
INSERT INTO integration VALUES ('peter', 'secure_password', 'peter.parker@gmail.com');
INSERT INTO integration VALUES ('donald', 'bad_password42', 'dtrump@hotmail.com');