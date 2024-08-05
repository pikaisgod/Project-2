CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE Products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    quantity INT NOT NULL,
    reorderLevel INT NOT NULL
);

CREATE TABLE Orders (
    id SERIAL PRIMARY KEY,
    item VARCHAR(255) NOT NULL,
    quantity INT NOT NULL,
    status VARCHAR(255) DEFAULT 'Pending'
);