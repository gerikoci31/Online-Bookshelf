# Online-Bookshelf

## Overview
The Online Bookshelf is a web application that allows users to search for books, save their favorite books to their profile, and manage their saved books. The application utilizes Apollo Client with React for the frontend and Apollo Server with Express and GraphQL for the backend.

## Features
User Authentication: Sign up and log in to access personalized features.
Book Search: Search for books using Google Books API.
Save Books: Save books to your profile and view them later.
Manage Saved Books: Remove saved books from your profile.


## Technologies
Frontend: React, Apollo Client, Bootstrap
Backend: Node.js, Express, Apollo Server, GraphQL
Database: MongoDB with Mongoose
Authentication: JSON Web Tokens (JWT)


###  Installation
Prerequisites
Node.js
npm or yarn
MongoDB (local or cloud-based)
Clone the Repository
bash
Copy code
git clone https://github.com/your-username/online-bookshelf.git
cd online-bookshelf
Backend Setup
Navigate to the backend directory:

bash
Copy code
cd server

## Install dependencies:

bash
Copy code
npm install
Create a .env file in the server directory and add your environment variables:

env
Copy code
MONGODB_URI=your-mongodb-uri
JWT_SECRET=your-secret-key
Start the server:

bash
Copy code
npm start
Frontend Setup
Navigate to the frontend directory:

bash
Copy code
cd client

## Install dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start
Configuration

### Environment Variables

MONGODB_URI: MongoDB connection string.
JWT_SECRET: Secret key for JWT.

## GraphQL Endpoints
The GraphQL server is available at /graphql on the backend server. You can test queries and mutations using tools like Apollo Studio or GraphiQL.

## Usage
Sign Up / Log In: Use the signup or login forms to create or access your account.
Search for Books: Enter a query in the search bar to find books.
Save Books: Click "Save this Book!" to add books to your profile.
View Saved Books: Navigate to the Saved Books page to see and manage your saved books.

## Contributing
We welcome contributions! To contribute:

## Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature/your-feature).
Create a new Pull Request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.