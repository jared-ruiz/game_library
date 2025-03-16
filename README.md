# Game Library WIP

## Description

This is a personal full-stack development project designed to help you track the games you own and have completed. The application allows users to log in, sign up, and log out, providing a secure authentication system via bycrypt hashing. 

This project also demonstrates how to integrate and manage third-party API calls to a game library database. It’s a practical example of full-stack development, where both the front-end and back-end work seamlessly to deliver a user-friendly experience.

## Features

- **Authentication**: Sign up, login, and logout capabilities to manage user sessions securely.
- **Game Documentation**: Add, edit, and delete games that you own or have completed.
- **API Integration**: Fetch data from an external game database API to populate game information.
- **User Interface**: A clean and simple interface that allows users to easily interact with the application.
- **Responsive**: Optimized for use on both desktop and mobile devices.

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript, React
- **Backend**: Node.js, Express.js, Axios
- **Database**: MongoDB 
- **Authentication**: JWT (JSON Web Tokens) for secure login
- **API**: Integration with a game library API to fetch data (IGDB)

## How It Works

1. **User Authentication**: When a user signs up, their information is securely stored in the database. Upon logging in, the user receives a token, which they use to access authenticated endpoints for game management.

2. **Environment Variables**: Sensitive data like database credentials and API keys are securely managed using environment variables, ensuring flexibility and security across different environments.
   
3. **Game Tracking**: Users can search for games by name, using an integrated API call to fetch data from an external game library database. They can then add games to their library, update their status (e.g., owned, completed), and delete them as needed.

4. **API Integration**: The app interacts with an API to fetch game data, which simplifies adding detailed information such as cover images, descriptions, and release dates.
