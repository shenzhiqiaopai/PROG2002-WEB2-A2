// Import the required modules
const express = require("express");
const dbcon = require("./database");

// Connect to the database
let connection = dbcon.getConnection();
connection.connect((err) => {
    if (err) throw err;//If this fails, an error is thrown.
    console.log("Connected to db");
});

/**
 *  Create CATEGORY Table in DB
 */
let sqlCreateCategory = `
    CREATE TABLE IF NOT EXISTS CATEGORY (
        CATEGORY_ID INT AUTO_INCREMENT PRIMARY KEY,
        NAME VARCHAR(200) NOT NULL
    );
`;
connection.execute(sqlCreateCategory, (err, records) => {
    if (err) {
        console.log("Error while creating table: CATEGORY", err);
    } else {
        console.log("CATEGORY Table created");
    }
});

/**
 *  Insert Data into CATEGORY Table
 */
let sqlInsertCategory = `
    INSERT INTO CATEGORY (NAME) VALUES 
    ('Healthcare'),
    ('Education'),
    ('Environment'),
    ('Disaster Relief'),
    ('Entrepreneurship'),
    ('Technology'),
    ('Animal Protection'),
    ('Arts and Culture'),
    ('Sports'),
    ('Religion');
`;
connection.execute(sqlInsertCategory, (err, records) => {
    if (err) {
        console.log("Error while inserting into CATEGORY table", err);
    } else {
        console.log("Data inserted into CATEGORY table");
    }
});

/**
 *  Create FUNDRAISER Table in DB
 */
let sqlCreateFundraiser = `
    CREATE TABLE IF NOT EXISTS FUNDRAISER (
        FUNDRAISER_ID INT AUTO_INCREMENT PRIMARY KEY,
        ORGANIZER VARCHAR(200) NOT NULL,
        CAPTION VARCHAR(255),
        TARGET_FUNDING DECIMAL(12, 2),
        CURRENT_FUNDING DECIMAL(12, 2),
        CITY VARCHAR(200),
        ACTIVE BOOLEAN,
        CATEGORY_ID INT,
        FOREIGN KEY (CATEGORY_ID) REFERENCES CATEGORY(CATEGORY_ID)
    );
`;
connection.execute(sqlCreateFundraiser, (err, records) => {
    if (err) {
        console.log("Error while creating table: FUNDRAISER", err);
    } else {
        console.log("FUNDRAISER Table created");
    }
});

/**
 *  Insert Data into FUNDRAISER Table
 */
let sqlInsertFundraiser = `
    INSERT INTO FUNDRAISER (ORGANIZER, CAPTION, TARGET_FUNDING, CURRENT_FUNDING, CITY, ACTIVE, CATEGORY_ID) VALUES
    ('John Doe', 'Raise funds for surgery costs', 50000.00, 25000.00, 'New York', TRUE, 1),  -- Healthcare
    ('Jane Smith', 'Scholarship fund for underprivileged students', 20000.00, 15000.00, 'Los Angeles', TRUE, 2),  -- Education
    ('Alen Warriors', 'Protect the rainforest', 100000.00, 70000.00, 'Amazon', FALSE, 3),  -- Environment
    ('Disaster Aid', 'Support earthquake victims', 50000.00, 30000.00, 'Istanbul', TRUE, 4),  -- Disaster Relief
    ('Start Hub', 'Launch new tech startup', 120000.00, 100000.00, 'San Francisco', TRUE, 5),  -- Entrepreneurship
    ('Tech Innovators', 'Develop new AI technology', 150000.00, 120000.00, 'Silicon Valley', TRUE, 6),  -- Technology
    ('Animal Guardian', 'Help stray dogs find homes', 30000.00, 25000.00, 'Chicago', TRUE, 7),  -- Animal Protection
    ('Art Galleries', 'Support local artists exhibition', 20000.00, 18000.00, 'Austin', TRUE, 8),  -- Arts and Culture
    ('Youth Sports Club', 'Fund soccer league for kids', 15000.00, 10000.00, 'Miami', TRUE, 9),  -- Sports
    ('Community Church', 'Restore historic church building', 40000.00, 30000.00, 'Boston', TRUE, 10);  -- Religion
`;
connection.execute(sqlInsertFundraiser, (err, records) => {
    if (err) {
        console.log("Error while inserting into FUNDRAISER table", err);
    } else {
        console.log("Data inserted into FUNDRAISER table");
    }
});
