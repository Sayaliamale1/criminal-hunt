
# Fugitive Capture Game

## Project Description

This project is a simple web application where three cops try to capture a fugitive hiding in one of five cities. Each cop selects a city to investigate and a vehicle based on the city's distance. The system simulates the fugitive's location and determines if any cop successfully captures the fugitive. 

## Technologies Used

- **Frontend**: React
- **Backend**: Node.js
- **Deployment**: Netlify (for the frontend) and any preferred service for Node.js backend (such as Heroku, Vercel, etc.)

## Project Structure

### Frontend

- **Start/Landing Page**: Allows the user to select one of the three cops.
- **Location Selection Page**: The selected cop can choose a city to investigate.
- **Vehicle Selection Page**: The cop selects a vehicle suitable for the selected city's distance.
- **Result Page**: Displays whether the cop successfully captured the fugitive.

### Backend

- **Endpoints**:
  - `/cities`: Returns the list of cities and their distances.
  - `/vehicles`: Returns the list of available vehicles and their range.
  - `/capture`: Accepts the cops' choices and returns the result of the capture attempt.

## Gameplay

1. **City Selection**: Each cop independently chooses one city from the following to investigate:
    - Yapkashnagar (60 KM)
    - Lihaspur (50 KM)
    - Narmis City (40 KM)
    - Shekharvati (30 KM)
    - Nuravgram (20 KM)

2. **Vehicle Selection**: Based on the chosen city's distance, each cop selects an electric vehicle considering its range and availability:
    - EV Bike (60 KM) - 2 available
    - EV Car (100 KM) - 1 available
    - EV SUV (120 KM) - 1 available

3. **Result**: The system determines if any cop successfully found the fugitive. If found, it displays the name of the cop who made the successful capture.

## Technical Requirements

### Frontend

- Develop screens for:
  - Start/Landing Page
  - Selection of city for each cop
  - Selection of vehicle options for each cop
  - Result page indicating the capture status and, if successful, the capturing cop's name
- Ensure the UI is responsive

### Backend

- Use appropriate data structures to store city names, distances, and vehicle properties (range, count)
- Simulate the fugitive's location in one of the cities (randomly)
- Based on cop choices and simulated location, determine if any cop successfully captured the fugitive
- Reset the fugitive's location after each capture attempt
- Ensure vehicle range is enough for a round trip to the selected city

## Assumptions

- The fugitive randomly chooses one of the five cities to hide
- Each cop can only choose a unique city
- Vehicle must have enough range for a round trip

## Installation and Setup

### Backend

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/fugitive-capture-game.git
 
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Run the server:
    ```sh
    npm run dev
    ```

### Frontend

1. Navigate to the frontend directory:
    ```sh
    cd ../client
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Run the frontend application:
    ```sh
    npm run dev
    ```

### Deployment

1. **Frontend**: Deploy the React application on Netlify.
2. **Backend**: Deploy the Node.js backend on a preferred service like Heroku or Vercel.

## API Endpoints

### `GET /cities`

Returns the list of cities with their distances.

### `GET /vehicles`

Returns the list of available vehicles with their range and count.

### `POST /capture`

Accepts the cop choices and determines if the fugitive is captured.

**Request Body**:
```json
{
  "copChoices": [
    { "name": "Cop 1", "city": "Yapkashnagar", "vehicle": "EV Car" },
    { "name": "Cop 2", "city": "Lihaspur", "vehicle": "EV Bike" },
    { "name": "Cop 3", "city": "Nuravgram", "vehicle": "EV SUV" }
  ]
}
```

**Response**:
```json
{
  "success": true,
  "capturingCop": "Cop 1"
}
```
or
```json
{
  "success": false,
  "message": "The fugitive escaped!"
}
```

