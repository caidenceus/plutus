CREATE SCHEMA IF NOT EXISTS usertesting;

DROP TABLE IF EXISTS usertesting.user;
CREATE TABLE usertesting.user (
    username TEXT NOT NULL PRIMARY KEY,
    password TEXT NOT NULL,
    email TEXT NOT NULL
);


INSERT INTO usertesting.user VALUES ('test_user1', 'secure_password', 'test1@test.com');
INSERT INTO usertesting.user VALUES ('test_user2', 'not_secure_password', 'test2@test.com');
INSERT INTO usertesting.user VALUES ('test_user3', 'horible_password', 'test3@test.com');
