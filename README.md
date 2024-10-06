# Moviezzhub - The Movie Watchlist App

Moviezzhub is a movie watchlist application built using **React** with **TypeScript** for type safety and **Tailwind CSS** for modern, responsive styling. The app allows users to search for movies, add them to a watchlist, and track what they have already watched. It utilizes **Axios** for API requests, **Zustand** for state management, and the **Open Movie Database (OMDb) API** for fetching movie data.

## Features

- **Search for Movies:** Search for your favorite movies using the OMDb API
- **Add to Watchlist:** Add movies you want to watch later to a personal watchlist
- **Track Watched Movies:** Mark movies as watched to keep track of what you've seen
- **Responsive Design:** Optimized for both mobile and desktop devices using Tailwind CSS
- **State Management:** Handled using Zustand for a lightweight and efficient solution
- **API Requests:** Managed using Axios for easy and reliable data fetching

## Tech Stack

- **React** - Frontend library for building user interfaces
- **TypeScript** - Superset of JavaScript providing static typing
- **Tailwind CSS** - Utility-first CSS framework for responsive, modern designs
- **Axios** - Promise-based HTTP client for the browser and Node.js
- **Zustand** - State management library for managing global state
- **OMDb API** - External API used to fetch movie data

## Getting Started

### Prerequisites

To run this project locally, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (>= 14.x)
- npm or yarn (package manager)

### Installation

1. **Clone the repo:**
   ```bash
   git clone https://github.com/your-username/moviezzhub.git
   cd moviezzhub
   ```

2. **Install dependencies:**
   Using npm:
   ```bash
   npm install
   ```
   Or using yarn:
   ```bash
   yarn install
   ```

3. **Run the application:**
   Using npm:
   ```bash
   npm start
   ```
   Or using yarn:
   ```bash
   yarn start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## API Setup

The app uses the OMDb API to fetch movie data. You'll need an API key from OMDb to make requests.

1. **Get your OMDb API key:**
   - Go to the [OMDb website](http://www.omdbapi.com/) and sign up to get your free API key

2. **Using the API key in the code:**
   The API key should be added to your environment variables. Create a `.env` file in the root directory and add:
   ```
   REACT_APP_OMDB_API_KEY=your_api_key_here
   ```
   Replace "your_api_key_here" with your own OMDb API key.

## Available Scripts

- `npm start` - Start the development server
- `npm run build` - Build the app for production
- `npm test` - Run the test suite
- `npm run lint` - Lint the code using ESLint

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository
2. Create a new feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a pull request
