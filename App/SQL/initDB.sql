CREATE DATABASE IF NOT EXISTS projet DEFAULT CHARSET = utf8mb3 COLLATE = utf8mb3_general_ci;

CREATE TABLE users (
    uuid binary(16) DEFAULT(UUID_TO_BIN(UUID(), 1)) NOT NULL UNIQUE, firstname Varchar(50) NOT NULL, lastname Varchar(50) NOT NULL, mail Varchar(255) NOT NULL UNIQUE INDEX, password Varchar(255) NOT NULL, role Varchar(20) DEFAULT('user') NOT NULL, created_at Date DEFAULT(CURRENT_DATE) NOT NULL, CONSTRAINT PK_users PRIMARY KEY (uuid)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb3 COLLATE = utf8mb3_general_ci;