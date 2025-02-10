# Movflix

Movflix is a web application that allows users to find and explore movies they will enjoy without the hassle. It provides a seamless and user-friendly interface to search for movies, view trending movies, and display ratings across movie critics.

## Features

- **Search Movies**: Users can search for movies by entering a query in the search bar.
- **Trending Movies**: Displays a list of trending movies.
- **Movie Details**: Provides detailed information about each movie, including the title, poster, rating, language, and year released.
- **Responsive Design**: The app is fully responsive and works well on both desktop and mobile devices.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Appwrite**: A backend server for managing user authentication and database.
- **The Movie Database (TMDb) API**: An API for fetching movie data.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/i-am-angelo/movflix.git
   cd movflix
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your TMDb API key:

   ```env
   VITE_TMDB_API_KEY=your_tmdb_api_key
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`.

## Usage

- **Search for Movies**: Enter a movie name in the search bar and press enter to see the results.
- **View Trending Movies**: Scroll down to see the list of trending movies.

## Acknowledgements

- [The Movie Database (TMDb)](https://www.themoviedb.org/) for providing the movie data.
- [Appwrite](https://appwrite.io/) for the backend services.
- [Tailwind CSS](https://tailwindcss.com/) for the styling framework.
