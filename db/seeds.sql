INSERT INTO department (name)
VALUES ("Sales"),
        ("Service"),
        ("HR"),
        ("Executive");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Person", 30000, 1),
        ("Sales Leader", 45000, 1),
        ("Customer Service Rep", 30000, 2),
        ("Service Manager", 45000, 2),
        ("Human Resources Rep", 30000, 3),
        ("Director of HR", 50000, 3),
        ("Vice President", 75000, 4),
        ("President", 100000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Phyllis", "Vance", 1, 1),
        ("Dwight", "Schrute", 1, 1),
        ("Jim", "Halpert", 2, 3),
        ("Kelly", "Kapoor", 3, 1),
        ("Meredith", "Palmer", 3, 1),
        ("Michael", "Scott", 4, 3),
        ("Toby", "Flenderson", 5, 3),
        ("Holly", "Flax", 6, 8),
        ("Jan", "Levinson", 7, 8),
        ("David", "Wallace", 8, 8);