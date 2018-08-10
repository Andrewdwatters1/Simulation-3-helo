CREATE TABLE userz (
    id SERIAL PRIMARY KEY,
    username VARCHAR(20),
    password VARCHAR(20),
    profile_pic TEXT
);

CREATE TABLE postz (
    id SERIAL PRIMARY KEY,
    title VARCHAR(45),
    img TEXT,
    content TEXT,
    author_id INTEGER REFERENCES userz
);