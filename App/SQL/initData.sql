INSERT INTO Role (name) VALUES
('Campus_manager'),
('Responsable_pedagogique'),
('Apprenant'),
('Delegue'),
('Formateur');

INSERT INTO User (uuid, last_name, first_name, active, password, email, role_id) VALUES
(UUID_TO_BIN(UUID(), 1), 'Dupont', 'Jean', 1, 'password123', 'jean.dupont@example.com', 1),
(UUID_TO_BIN(UUID(), 1), 'Smith', 'Alice', 1, 'alicepass', 'alice.smith@example.com', 2),
(UUID_TO_BIN(UUID(), 1), 'Garcia', 'Pedro', 0, 'securepwd', 'pedro.garcia@example.com', 3),
(UUID_TO_BIN(UUID(), 1), 'Müller', 'Hans', 1, 'secret123', 'hans.muller@example.com', 1),
(UUID_TO_BIN(UUID(), 1), 'Chen', 'Li', 1, 'p@ssw0rd', 'li.chen@example.com', 2),
(UUID_TO_BIN(UUID(), 1), 'Kim', 'Ji-hyun', 0, 'strongpwd', 'ji-hyun.kim@example.com', 3);