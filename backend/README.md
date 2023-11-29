# Inventory Application - Backend

This project contains the backend code for the Inventory Application, providing APIs to manage inventory data stored in a MongoDB database.

## Setup

To set up and run the backend:

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Configure environment variables for MongoDB connection, if required.
4. Run the server using `node app.js` or `npm start`.

## Functionality

- **User Authentication**: Handles login and registration, including password hashing and storage.
- **Inventory Management**: Manages CRUD operations for inventory items in the MongoDB database.
- **CORS Configuration**: Uses `cors` for handling cross-origin requests.

## Features

- **Express Server**: Utilizes Express.js for handling routes and middleware.
- **MongoDB Integration**: Interacts with MongoDB database using Mongoose for data storage and retrieval.
- **Password Hashing**: Utilizes `bcrypt` for securely hashing and storing user passwords.

## API Endpoints

- `POST /api/register`: Register a new user.
- `POST /api/login`: Login for existing users.
- Other endpoints for inventory management and user actions.

## Usage

1. Ensure MongoDB is running and accessible.
2. Start the server using `node app.js`.
3. The backend APIs will be available at the specified routes (`/api/register`, `/api/login`, etc.).

## Future Development

- Improved error handling and validation for API endpoints.
- Integration of additional security measures like JWT for authentication.
- Scaling the application for handling increased user traffic.
