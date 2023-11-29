# Inventory Application

This project is an Inventory Management Application designed to help manage inventory items stored in a MongoDB database. It consists of both frontend and backend components.

## Purpose

The Inventory Application aims to provide a user-friendly interface for managing inventory items. It allows users to log in, register, view available inventory, and perform actions based on their roles (admin or user). The backend server handles authentication, manages inventory data, and provides API endpoints for frontend interaction.

## Folder Structure

The repository contains two main folders:

1. **Frontend**: Contains the HTML, JavaScript, and CSS/Bootstrap files for the web-based frontend of the application.
2. **Backend**: Contains the Express.js server code responsible for managing routes, handling database interactions, authentication, and API endpoints.

## Getting Started

To start using the Inventory Application:

### Backend Setup

1. Navigate to the `backend` folder.
2. Install dependencies using `npm install`.
3. Configure environment variables for the MongoDB connection in a `.env` file if required.
4. Run the server using `node app.js` or `npm start`.

### Frontend Setup

1. Navigate to the `frontend` folder.
2. Open the `index.html` file in a web browser or deploy it to a web server.
3. Ensure that the backend server (Express API) is running and accessible at the specified routes.

### Usage

1. Access the frontend application by opening the URL where the frontend is hosted (if served from a web server) or by opening `index.html`.
2. Use the login/register screen to authenticate as an admin or user.
3. Access respective dashboards based on the role to manage inventory or view available items.

## Future Development

- Integration of additional features like purchase history, user permissions, etc.
- Improvement in security measures and error handling.
- Development of a mobile application for enhanced accessibility.

Feel free to explore the frontend and backend folders for further details on their specific setup, functionality, and usage.

---

For detailed instructions and specific setup details, refer to the README files in the respective frontend and backend folders.
