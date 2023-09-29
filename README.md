# React Weather and Map App

This is a React-based web application that allows users to search for locations, view them on a map, and check the current weather conditions for those locations. It integrates with weather and map APIs to provide real-time data.

## Key technologies:
- React;
- TypeScript;
- HTML/CSS;
- Redux Toolkit;
  
## Table of Contents
1. [Demo](#demo)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [API Integration](#api-integration)
6. [Testing](#testing)
7. [Contributing](#contributing)
8. [License](#license)

## Demo
You can check out a live demo of the application here: [Demo Link](https://weather-map-inky.vercel.app/)

## Features
- Search for locations by name.
- View location results on an interactive map.
- Click on a location on the map to get its coordinates.
- Fetch current weather conditions based on coordinates.
- Reverse geocoding: Search for locations based on coordinates.
- End-to-end testing with Cypress.

## Installation
To set up the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/react-weather-map-app.git
2. Navigate to the project directory:
   ```bash
   cd weather
3. Install the dependencies:
   ```bash
   yarn
4. Create a .env file in the root directory and add your API keys for the weather and map APIs. For example:
   ```bash
   REACT_APP_TOKEN =your-weather-api-key
    WEATHER_API_KEY=your-map-api-key
5. Start the development server:
    ```bash
    yarn start
6.  Open your browser and visit http://localhost:3000 to view the app. 
## Usage
1. Enter a location name in the search bar and click "Search."
2. The search results will be displayed on the map as markers.
3. Click on a marker to view the location's coordinates.
4. Click on "Get Weather" to fetch the current weather conditions for that location.
5. You can also use the "Reverse Geocode" feature to search for locations based on coordinates.

## API Integration
The app integrates with two APIs:

- Weather API (e.g., OpenWeatherMap, Weatherstack, etc.): Provides weather data based on coordinates.
- Map API (e.g., Google Maps, Mapbox, etc.): Provides map data and geocoding/reverse geocoding capabilities.

## Testing
This project includes end-to-end tests using Cypress. To run the tests, follow these steps:

1. Make sure the development server is running:

   ```bash
   yarn start
2. In a separate terminal, run the Cypress tests:

    ```bash
    yarn cypress:open

Cypress will open a window where you can select and run the tests interactively.

## Contributing
Contributions are welcome! If you'd like to contribute to the project, please follow these steps:
Fork the repository.

Create a new branch for your feature or bug fix:


    git checkout -b feature/your-feature-name
    
Make your changes and commit them:

    git commit -m "Add your commit message here"
Push your changes to your fork:

    git push origin feature/your-feature-name

Create a pull request to the main repository.

Please replace "your-feature-name" and "Add your commit message here" with actual data as needed.
