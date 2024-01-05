use mydatabase

CREATE TABLE Employee (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50),
    DateOfBirth DATE NOT NULL,
    Gender VARCHAR(10),
    PhoneNumber VARCHAR(15) NOT NULL,
    Email VARCHAR(100) NOT NULL unique,
    HireDate DATE NOT NULL,
    JobTitle VARCHAR(100) NOT NULL,
    DepartmentID INT,
    AddressID INT,
    Salary DECIMAL(10, 2) NOT NULL,
    ManagerID INT,
    EmploymentStatus VARCHAR(20),
    EmergencyContactName VARCHAR(100),
    EmergencyContactRelationship VARCHAR(50),
    EmergencyContactPhoneNumber VARCHAR(15),
    PhotoURL VARCHAR(255),
    CreateTime datetime,
    FOREIGN KEY (DepartmentID) REFERENCES Department(ID),
    FOREIGN KEY (ManagerID) REFERENCES Manager(ID),
    FOREIGN KEY (AddressID) REFERENCES Address(ID)
);

CREATE TABLE Department (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    DepartmentName VARCHAR(100),
    Location VARCHAR(255)
);
CREATE TABLE Manager (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    ManagerName VARCHAR(100) not null,
    PhoneNumber VARCHAR(15) not null,
    Email VARCHAR(100) not null unique
);
CREATE TABLE Address (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    City VARCHAR(10) not null,
    State VARCHAR(10) not null,
    Country varchar(10) not null,
    Pin varchar(10) not null
);
