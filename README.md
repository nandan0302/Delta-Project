# Airbnb Clone — Vacation Rental Platform

A full-stack vacation rental web application inspired by Airbnb, built using **Node.js, Express.js, MongoDB, EJS, and Bootstrap**. Users can explore property listings, create and manage listings, authenticate securely, and share their experiences through reviews and ratings.

## Features

- **User Authentication:** User registration, login, logout, and session management.
- **Property Listings:** Create, view, edit, and delete property listings.
- **Authorization:** Restrict listing management and other protected operations to authorized users.
- **Reviews and Ratings:** Add reviews and ratings to property listings.
- **Image Management:** Upload and display listing images using the configured image-storage service.
- **Search Functionality:** Search property listings by title, location, and country.
- **Input Validation:** Validate user input using Joi.
- **Error Handling:** Handle application errors using custom middleware and reusable error-handling utilities.
- **Flash Messages:** Display feedback messages for successful operations and errors.
- **Responsive UI:** Build responsive pages using Bootstrap and custom CSS.
- **Maps Integration:** Support map-related listing features using Mapbox, where configured.

## Tech Stack

**Frontend**
- HTML5
- CSS3
- JavaScript
- EJS templating
- Bootstrap

**Backend**
- Node.js
- Express.js
- Express middleware
- REST-style routes

**Database**
- MongoDB
- Mongoose

**Authentication and Security**
- Passport.js
- passport-local-mongoose
- express-session
- connect-flash
- Joi

**Additional Libraries and Services**
- method-override
- ejs-mate
- Cloudinary for image management
- Mapbox for map integration

## Project Structure

```text
Project1/
├── controllers/
│   ├── listings.js
│   ├── reviews.js
│   └── users.js
├── init/
│   ├── data.js
│   └── index.js
├── models/
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── public/
│   ├── css/
│   └── js/
├── routes/
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── utils/
│   ├── ExpressError.js
│   └── wrapAsync.js
├── views/
│   ├── error.ejs
│   ├── includes/
│   ├── layouts/
│   ├── listings/
│   └── users/
├── app.js
├── cloudConfig.js
├── middleware.js
├── schema.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites

Install the following before running the application:

- [Node.js](https://nodejs.org/)
- npm (included with Node.js)
- [MongoDB Atlas](https://www.mongodb.com/atlas) or a compatible MongoDB instance
- Git

### 1. Clone the Repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd Project1
```

Replace the repository URL and directory name with your actual values.

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the project root and configure the environment variables required by the application.

Example:

```dotenv
PORT=8080
ATLASDB_URL=your_mongodb_connection_string
SECRET=your_session_secret
MAP_TOKEN=your_mapbox_token
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_cloudinary_key
CLOUDINARY_SECRET=your_cloudinary_secret
```

The variable names above are examples. Verify them against your actual application configuration before running the project.

**Security:** Never commit your `.env` file or expose database credentials, session secrets, or private API keys in your repository.

### 4. Start the Application

If `package.json` defines a start script, run:

```bash
npm start
```

Alternatively, if `app.js` is the entry point and no start script is configured:

```bash
node app.js
```

### 5. Open the Application

If the application runs on port `8080`, visit:

http://localhost:8080

Use the configured port if it differs.

## Application Modules

### User Authentication

Handles user registration, login, logout, and session-based authentication using Passport.js.

### Listings Management

Allows users to browse property listings and manage their own listings, subject to authorization rules.

### Reviews and Ratings

Allows users to submit reviews and ratings for properties and view feedback from other users.

### Validation and Error Handling

Uses Joi for request-data validation and custom middleware to handle errors and asynchronous operations.

### Image and Map Integration

Integrates configured third-party services for property images and map-related functionality.

## Development Workflow

This project uses Git and GitHub for source-code version control.

1. Create a feature branch.
2. Implement and test your changes locally.
3. Commit changes with meaningful commit messages.
4. Push the branch to GitHub.
5. Open a pull request when collaborating.
6. Review and test changes before merging.

## Future Improvements

- Add automated tests for routes and application functionality.
- Improve search and filtering capabilities.
- Enhance validation and error handling.
- Improve accessibility and responsive design.
- Optimize database queries and application performance.
- Refine the user interface and user experience.

## Disclaimer

This is an independent educational project inspired by vacation rental platforms. It is not affiliated with or endorsed by Airbnb, Inc.

## Author

Full-stack web development project built to practise frontend development, backend development, database integration, authentication, and application design.
