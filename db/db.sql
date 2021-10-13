create table projects (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(1000) NOT NULL,
    featured_image_id INT,
    PRIMARY KEY (id)
) ENGINE=InnoDB;


create table recipes (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(1000) NOT NULL,
    featured_image_id INT,
    notes VARCHAR(10000),
    user_id INT NOT NULL,
    project_id INT NOT NULL,
    version INT NOT NULL,
    parent_version INT,
    PRIMARY KEY (id),
    FOREIGN_KEY (featured_image_id) REFERENCES images(id),
    FOREIGN_KEY (user_id) REFERENCES users(id),
    FOREIGN_KEY (project_id) REFERENCES projects(id)
) ENGINE=InnoDB;


create table ingredients (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(1000) NOT NULL,
    PRIMARY KEY (id)
) ENGINE=InnoDB;


create table recipe_ingredient (
    id INT NOT NULL AUTO_INCREMENT,
    ingredient_id INT NOT NULL,
    recipe_id INT NOT NULL,
    quantity VARCHAR(100) NOT NULL,
    notes VARCHAR(10000),
    PRIMARY KEY (id),
    FOREIGN_KEY (ingredient_id) REFERENCES ingredients(id),
    FOREIGN_KEY (recipe_id) REFERENCES recipes(id)
) ENGINE=InnoDB;


create table steps (
    id INT NOT NULL AUTO_INCREMENT,
    step VARCHAR(10000) NOT NULL,
    recipe_id INT NOT NULL,
    order INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN_KEY (recipe_id) REFERENCES recipes(id)
) ENGINE=InnoDB;


create table rating_categories (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(1000) NOT NULL,
    is_active BOOLEAN NOT NULL,
    PRIMARY KEY (id)
) ENGINE=InnoDB;


create table ratings (
    id INT NOT NULL AUTO_INCREMENT,
    recipe_id INT NOT NULL,
    rating_id INT NOT NULL,
    score INT,
    comments VARCHAR(10000),
    PRIMARY KEY (id),
    FOREIGN_KEY (recipe_id) REFERENCES recipes(id),
    FOREIGN_KEY (rating_id) REFERENCES ratings(id)
) ENGINE=InnoDB;


create table images (
    id INT NOT NULL AUTO_INCREMENT,
    image_path VARCHAR(1000),
    recipe_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN_KEY (recipe_id) REFERENCES recipes(id)
) ENGINE=InnoDB;


create table users (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(1000),
    username VARCHAR(1000),
    PRIMARY KEY (id)
) ENGINE=InnoDB;