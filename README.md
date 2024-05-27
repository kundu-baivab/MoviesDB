# MoviesDB

# Introduction
This is a simple movie app built with React and Redux. It allows users to browse a list of movies, mark their favorite movies, and browse through the list of favorite movies.

## Features
- Browse a list of movies
- Mark favorite movies
- Browse list of favorite movies

## Installation
1. Clone the repository to your local machine:
git clone https://github.com/kundu-baivab/MoviesDB.git
2. Navigate to the project directory:
   ``cd MoviesDB``
3. Install dependencies:
   ``npm install``

## Usage
1. Start the development server:
   ``npm run dev``
2. Open your browser and go to `http://localhost:5173` to view the app.

## Configuration
- The app uses Redux for state management. You can find the Redux store configuration in `src/redux/store.js`.
- Movie data is fetched from a dummy API. The API endpoint can be configured in `src/redux/slices/movies.js`.

## Dependencies
- React
- Redux
- React Router
- Redux Toolkit
- Redux Persist
- React Icons
