# book-store

Junior Backend Developer Code Challenge

## Getting Started

1. Create the database. The script you can use is shown below:

create table books (
id UUID primary key default gen_random_uuid (),
title VARCHAR(100) not null,
author VARCHAR(100) not null,
price NUMERIC not null
);

CREATE TABLE orders (
id SERIAL PRIMARY KEY,
idBook uuid NOT NULL REFERENCES books(id),
quantity INTEGER NOT NULL,
created_at TIMESTAMP DEFAULT NOW(),
totalPrice NUMERIC NOT NULL
);

Supabase was used for this project. Please in your google navegator type Supabase, open the link https://supabase.com and create a project (need to create and account for this).

2. Create a file in the project root called .env

   where you will enter the variables:

   # Database

   SUPABASE_URL="Enter the database URL"
   SUPABASE_KEY="Enter the database role key"

   You will find them by clicking on “Connect” or just click in "Project overview" scroll down and watch Project API.

3. Run the command: npm install

4. Run the command: npm run dev.

   It will show you something like:

   > book-store@1.0.0 dev
   > ts-node src/app.ts

   [dotenv@17.2.1] injecting env (2) from .env -- tip: 🔐 encrypt with Dotenvx: https://dotenvx.com
   Server run http://localhost:3000

5. You can test the following URLs in Postman:
   Please create a book with POST http://localhost:3000/api/books to start
   BOOKS:

   - POST http://localhost:3000/api/books
     body example:
     {
     "title": "Game of thrones",
     "author": "George R.R. Martin",
     "price":59,50
     }
   - GET http://localhost:3000/api/books
   - GET http://localhost:3000/api/books/{id} example http://localhost:3000/api/books/42ca3786

   ORDERS:
   A book must be created in order to create an "order".

   - POST http://localhost:3000/api/orders
     body example:
     {
     "idBook": "42ca3786",
     "quantity": 3
     }
   - GET http://localhost:3000/api/orders

   NOTE! : Watch the demo video to see demonstrations of the project, thank you.
   if you want to see swagger documentation please in your navegator copy the following URLs:
   http://localhost:3000/docs/order or http://localhost:3000/docs/book
