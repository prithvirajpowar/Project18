use mobile;

show tables;

select * from suppliers;

drop table Supplier;

CREATE TABLE suppliers (
    supplier_id varchar(20) PRIMARY KEY,
    supplier_name VARCHAR(100) NOT NULL,
    contact_person VARCHAR(50),
    phone_number VARCHAR(15),
    email VARCHAR(100)
);

CREATE TABLE categories (
    category_id varchar(20) PRIMARY KEY,
    category_name VARCHAR(50) NOT NULL,
    parent_category_id varchar(20),
    FOREIGN KEY (parent_category_id) REFERENCES categories(category_id)

);

CREATE TABLE products (
    product_id varchar(20) PRIMARY KEY,
    brand VARCHAR(50) NOT NULL,
    model VARCHAR(50) NOT NULL,
    storage_capacity INT,
    color VARCHAR(20),
    price DECIMAL(10, 2) NOT NULL,
    quantity_in_stock INT NOT NULL,
    category_id varchar(20),
    supplier_id varchar(20),
    image BLOB,
    FOREIGN KEY (category_id) REFERENCES categories(category_id),
    FOREIGN KEY (supplier_id) REFERENCES suppliers(supplier_id)

);

select * from products;
desc products;

CREATE TABLE employees (
    employee_id varchar(20) PRIMARY KEY,
    employee_name VARCHAR(100) NOT NULL,
    position VARCHAR(50),
    phone_number VARCHAR(15),
    email VARCHAR(100),
    hire_date DATE,
    salary double
);


CREATE TABLE shops (
    shop_id varchar(20) PRIMARY KEY,
    shop_name VARCHAR(100) NOT NULL,
    location VARCHAR(255),
    owner_name VARCHAR(255),
    phone_number VARCHAR(15)
);

CREATE TABLE shippers (
    shipper_id varchar(20) PRIMARY KEY,
    shipper_name VARCHAR(100) NOT NULL,
    phone_number VARCHAR(15)
);


CREATE TABLE orders (
    order_id varchar(20) PRIMARY KEY,
    order_date DATE NOT NULL,
    shipper_id varchar(20),
    employee_id varchar(20),
    shop_id varchar(20),
    total_amount DECIMAL(10, 2) NOT NULL,
    payment_status VARCHAR(20) NOT NULL,
    FOREIGN KEY (shipper_id) REFERENCES shippers(shipper_id),
    FOREIGN KEY (employee_id) REFERENCES employees(employee_id),
    FOREIGN KEY (shop_id) REFERENCES shops(shop_id)
);

CREATE TABLE payment (
    payment_id varchar(20) PRIMARY KEY,
    order_id varchar(20),
    payment_date DATE NOT NULL,
    payment_amount DECIMAL(10, 2) NOT NULL,
    payment_method VARCHAR(50),
    FOREIGN KEY (order_id) REFERENCES orders(order_id)
);

show tables;

select * from categories;
select * from products;


