create table projects (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(1000) NOT NULL,
    featured_image_id INT,
    user_id INT NOT NULL,
    FOREIGN KEY (featured_image_id) REFERENCES images(id)
    FOREIGN KEY (user_id) REFERENCES users(id)
) ENGINE=InnoDB;


create table recipes (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(1000),
    notes VARCHAR(1000),
    project_id INT NOT NULL,
    version INT NOT NULL,
    parent_version INT,
    FOREIGN KEY (project_id) REFERENCES projects(id)
) ENGINE=InnoDB;


create table ingredients (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(1000) NOT NULL
) ENGINE=InnoDB;


create table recipe_ingredient (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    ingredient_id INT NOT NULL,
    recipe_id INT NOT NULL,
    quantity VARCHAR(100) NOT NULL,
    notes VARCHAR(10000),
    FOREIGN KEY (ingredient_id) REFERENCES ingredients(id),
    FOREIGN KEY (recipe_id) REFERENCES recipes(id)
) ENGINE=InnoDB;


create table steps (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    step VARCHAR(10000) NOT NULL,
    recipe_id INT NOT NULL,
    step_order INT NOT NULL,
    FOREIGN KEY (recipe_id) REFERENCES recipes(id)
) ENGINE=InnoDB;


create table rating_categories (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(1000) NOT NULL,
    is_active BOOLEAN NOT NULL
) ENGINE=InnoDB;


create table ratings (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    recipe_id INT NOT NULL,
    rating_category_id INT NOT NULL,
    score INT,
    comments VARCHAR(10000),
    FOREIGN KEY (recipe_id) REFERENCES recipes(id),
    FOREIGN KEY (rating_category_id) REFERENCES rating_categories(id)
) ENGINE=InnoDB;


create table images (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    image_path VARCHAR(1000)
) ENGINE=InnoDB;


create table recipe_image (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    recipe_id INT NOT NULL,
    image_id INT NOT NULL,
    featured_image BOOLEAN NOT NULL,
    FOREIGN KEY (recipe_id) REFERENCES recipes(id),
    FOREIGN KEY (image_id) REFERENCES images(id)
) ENGINE=InnoDB;


create table users (
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    password_hash VARCHAR(100) NOT NULL,
    role VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
) ENGINE=InnoDB;