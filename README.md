# MSME Project Documentation

## Project Overview
The MSME project is designed to manage and support Micro, Small, and Medium Enterprises (MSMEs) by providing essential tools for operational efficiency.

## Tech Stack
- **Frontend**: React.js
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT
- **Testing**: Jest, Mocha

## Repository Structure
```
msme/
│
├── client/            # Frontend code
│
├── server/            # Backend code
│
├── config/            # Configuration files
│
├── scripts/           # Scripts for automation
│
└── README.md          # Project documentation
```

## Features
- User authentication and authorization
- Inventory management
- Sales tracking
- Reporting and analytics dashboard

## Installation Guide
1. Clone the repository:
   ```
   git clone https://github.com/palurujaswanth/MSME.git
   ```
2. Navigate to the server directory and install dependencies:
   ```
   cd server
   npm install
   ```
3. Navigate to the client directory and install dependencies:
   ```
   cd ../client
   npm install
   ```

## Running Instructions
1. Start the backend server:
   ```
   cd server
   npm start
   ```
2. Start the frontend client:
   ```
   cd ../client
   npm start
   ```

## Architecture
The MSME project uses a microservices architecture, allowing independent development and scaling of the frontend and backend services.

## Environment Variables
Ensure to set the following environment variables for the backend:
- `PORT`: The port on which the server will run
- `MONGODB_URI`: The MongoDB connection string
- `JWT_SECRET`: Secret key for JWT authentication

## API Documentation
Refer to the `/api-docs` endpoint after starting the server for detailed API documentation.
