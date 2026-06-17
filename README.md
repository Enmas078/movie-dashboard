# 🎬 Movie Dashboard

A movie dashboard web application built with **React, TypeScript, and Vite** that allows users to search for movies, filter results, and view detailed movie information using the **OMDb API**.

## Features

* Search for movies
* Debounced search functionality
* Filter movies by year
* Filter by type (movie/series)
* Dynamic movie details page
* Loading and error handling
* Responsive user interface
* Back navigation
* React Router dynamic routing

## Tech Stack

* React
* TypeScript
* Vite
* Tailwind CSS
* React Router DOM
* React Query
* Axios
* OMDb API

## Project Setup & Installation

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone <your-github-repository-url>
```

### 2. Navigate into the Project Directory

```bash
cd movie-dashboard
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the root directory and add the following:

```env
VITE_TMDB_API_KEY=your_api_key
VITE_TMDB_BASE_URL=https://www.omdbapi.com
```

Replace `your_api_key` with your OMDb API key.

### 5. Run the Development Server

```bash
npm run dev
```

Open the application in your browser:

```txt
http://localhost:5173/
```

### 6. Build for Production

```bash
npm run build
```

## Folder Structure

```txt
src
├── api
├── components
├── constants
├── hooks
├── layouts
├── pages
├── routes
├── services
├── types
└── utils
```

## Author

**Emmanuel Okoh**
Email: okohopeyemi078@gmail.com
