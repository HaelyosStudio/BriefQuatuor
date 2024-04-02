CREATE DATABASE IF NOT EXISTS Quatuor DEFAULT CHARSET = utf8mb3 COLLATE = utf8mb3_general_ci;

CREATE TABLE Cours
(
  id       INT(11)     NOT NULL AUTO_INCREMENT,
  day      DATE        NOT NULL,
  period   VARCHAR(20) NOT NULL,
  id_promo INT(11)     NOT NULL,
  PRIMARY KEY (id)
);

ALTER TABLE Cours
  ADD CONSTRAINT UQ_id UNIQUE (id);

CREATE TABLE Promo
(
  id         INT(11)     NOT NULL,
  name       VARCHAR(80) NOT NULL,
  date_start DATETIME    NOT NULL,
  date_fin   DATETIME    NOT NULL,
  places     INT(1)      NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE Role
(
  id   INT(11)     NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
);

ALTER TABLE Role
  ADD CONSTRAINT UQ_id UNIQUE (id);

CREATE TABLE User
(
  uuid binary(16) DEFAULT(UUID_TO_BIN(UUID(), 1)) NOT NULL UNIQUE,
  last_name  VARCHAR(50)  NOT NULL,
  first_name VARCHAR(50)  NOT NULL,
  active     BOOL         NOT NULL DEFAULT 0,
  password   VARCHAR(255) NOT NULL,
  email      VARCHAR(100) NOT NULL,
  role_id    INT(11)      NOT NULL,
  PRIMARY KEY (uuid)
);

ALTER TABLE User
  ADD CONSTRAINT UQ_id UNIQUE (uuid);

ALTER TABLE User
  ADD CONSTRAINT UQ_email UNIQUE (email);

CREATE TABLE UserHasCours
(
  user_id binary(16) DEFAULT(UUID_TO_BIN(UUID(), 1)) NOT NULL,
  cours_id INT(11) NOT NULL,
  presence BOOL    NOT NULL,
  delay    BOOL    NOT NULL
);

CREATE TABLE UserHasPromo
(
  user_id binary(16) DEFAULT(UUID_TO_BIN(UUID(), 1)) NOT NULL,
  promo_id INT(11) NOT NULL
);

ALTER TABLE User
  ADD CONSTRAINT FK_Role_TO_User
    FOREIGN KEY (role_id)
    REFERENCES Role (id);

ALTER TABLE UserHasPromo
  ADD CONSTRAINT FK_User_TO_UserHasPromo
    FOREIGN KEY (user_id)
    REFERENCES User (uuid);

ALTER TABLE UserHasCours
  ADD CONSTRAINT FK_User_TO_UserHasCours
    FOREIGN KEY (user_id)
    REFERENCES User (uuid);

ALTER TABLE UserHasPromo
  ADD CONSTRAINT FK_Promo_TO_UserHasPromo
    FOREIGN KEY (promo_id)
    REFERENCES Promo (id);

ALTER TABLE Cours
  ADD CONSTRAINT FK_Promo_TO_Cours
    FOREIGN KEY (id_promo)
    REFERENCES Promo (id);

ALTER TABLE UserHasCours
  ADD CONSTRAINT FK_Cours_TO_UserHasCours
    FOREIGN KEY (cours_id)
    REFERENCES Cours (id);
