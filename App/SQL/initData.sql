INSERT INTO Role (name) VALUES
('Campus_manager'),
('Responsable_pedagogique'),
('Apprenant'),
('Delegue'),
('Formateur');

INSERT INTO User (uuid, last_name, first_name, active, password, email, role_id) VALUES
(UUID_TO_BIN(UUID(), 1), 'Dupont', 'Jean', 1, '$2y$10$OZYlyyDnR/fGgzroE8Q.AecSSBnrBESINZCJLs7MN/yI3I8FXqe8m', 'jean.dupont@example.com', 1), -- Mot de passe en clair : password123
(UUID_TO_BIN(UUID(), 2), 'Smith', 'Alice', 1, '$2y$10$Yx5b2bFsXPHyNDaNV4U0y.2LxtZiEx9bP.dJ6J8brC3QSe5zxFd8a', 'alice.smith@example.com', 2), -- Mot de passe en clair : alicepass
(UUID_TO_BIN(UUID(), 3), 'Garcia', 'Pedro', 0, '$2y$10$wHZ7/SlHe97KDqB0G6vpxu27tLLB7yfYgk/2nDW4JU6pbdhLYG9Fq', 'pedro.garcia@example.com', 3), -- Mot de passe en clair : securepwd
(UUID_TO_BIN(UUID(), 4), 'Müller', 'Hans', 1, '$2y$10$aSXK5BeDgqbnXnLM5dLNq.JZDlbgAGAibCInSZ93cVLMdZr5b2SZq', 'hans.muller@example.com', 1), -- Mot de passe en clair : secret123
(UUID_TO_BIN(UUID(), 5), 'Chen', 'Li', 1, '$2y$10$2ClZ74v2noLgqqxyEK8zYuhjCRn54DQ0pTZMVNY7eZ8Tiz.ZiA9JG', 'li.chen@example.com', 2), -- Mot de passe en clair : p@ssw0rd
(UUID_TO_BIN(UUID(), 6), 'Kim', 'Ji-hyun', 0, '$2y$10$2XoL6fuRj2xVYvgvH/p.dOJFVkgxVB5J9/YDg79eQXG0IrIxUgE2S', 'ji-hyun.kim@example.com', 3); -- Mot de passe en clair : strongpwd

INSERT INTO Promo (id, name, date_start, date_fin, places) VALUES
(1, 'Promotion A', '2024-09-01', '2025-05-31', 50),
(2, 'Promotion B', '2024-10-01', '2025-06-30', 60);

INSERT INTO Cours (day, period, id_promo) VALUES
('2024-09-15', 'Matin', 1),
('2024-09-15', 'Après-midi', 1),
('2024-09-16', 'Matin', 1),
('2024-09-16', 'Après-midi', 1),
('2024-09-17', 'Matin', 2),  -- Ce cours appartient à la promotion B
('2024-09-17', 'Après-midi', 2),  -- Ce cours appartient à la promotion B
('2024-09-18', 'Matin', 2),  -- Ce cours appartient à la promotion B
('2024-09-18', 'Après-midi', 2),  -- Ce cours appartient à la promotion B
('2024-09-19', 'Matin', 1),
('2024-09-19', 'Après-midi', 1);

INSERT INTO UserHasCours (user_id, cours_id, presence, delay) VALUES
(UUID_TO_BIN(UUID(), 1), 1, 0, 0), -- Jean Dupont a le premier cours
(UUID_TO_BIN(UUID(), 1), 2, 0, 0), -- Jean Dupont a le deuxième cours
(UUID_TO_BIN(UUID(), 2), 3, 0, 0), -- Alice Smith a le troisième cours
(UUID_TO_BIN(UUID(), 2), 4, 0, 0), -- Alice Smith a le quatrième cours
(UUID_TO_BIN(UUID(), 3), 5, 0, 0), -- Pedro Garcia a le cinquième cours
(UUID_TO_BIN(UUID(), 3), 6, 0, 0), -- Pedro Garcia a le sixième cours
(UUID_TO_BIN(UUID(), 4), 7, 0, 0), -- Hans Müller a le septième cours
(UUID_TO_BIN(UUID(), 4), 8, 0, 0), -- Hans Müller a le huitième cours
(UUID_TO_BIN(UUID(), 5), 9, 0, 0), -- Li Chen a le neuvième cours
(UUID_TO_BIN(UUID(), 5), 10, 0, 0); -- Li Chen a le dixième cours

INSERT INTO UserHasPromo (user_id, promo_id) VALUES
(UUID_TO_BIN(UUID(), 1), 1), -- Jean Dupont est dans la promotion A
(UUID_TO_BIN(UUID(), 2), 2), -- Alice Smith est dans la promotion B
(UUID_TO_BIN(UUID(), 3), 1), -- Pedro Garcia est dans la promotion A
(UUID_TO_BIN(UUID(), 4), 2), -- Hans Müller est dans la promotion B
(UUID_TO_BIN(UUID(), 5), 1), -- Li Chen est dans la promotion A
(UUID_TO_BIN(UUID(), 6), 2); -- Ji-hyun Kim est dans la promotion B


