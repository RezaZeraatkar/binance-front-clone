# Binance-Clone
<div style="display: flex; justify-content: space-between; width: 100%;">
  <img src="https://res.cloudinary.com/db7v5ycxn/image/upload/v1702666156/github-readme-images/tft5abzbzygp3mbzspxf.png" height="48%" width="48%" alt="binance-exchange">
  <img src="https://res.cloudinary.com/db7v5ycxn/image/upload/v1702666156/github-readme-images/xgwesrupj9opnlhoqeuk.png" height="48%" width="48%" alt="binance-exchange">
</div>

## Prerequisites

This project requires Node.js version 16.13.0. Make sure you have this version installed before running the project.

## Note
Due to required verification on Binance new terms of service, the APIs of this project will not work unless you have a Binance API key and secret.

This project was bootstrapped with Create React App.

## Installation

In the project directory, you can run:

1. `npm i` 
2. `cd server`
3. `npm i`

## Running the Project

After installation, you can start the project by running:

`npm run dev`

## Dependencies

This project uses several dependencies, including:

- React 16
- Redux and redux-saga
- Styled components
- Axios for making HTTP requests
- Binance API for interacting with Binance
- Express for the server
- Nodemon for automatically restarting the server during development
- And many others

You can find the full list of dependencies in the `package.json` file.

## Server

The server for this project is a separate module with its own `package.json` file. It uses `express` for routing and `nodemon` for automatic reloading during development. The server interacts with the Binance API.

## Scripts

Several scripts are available for development:

- `start`: Starts the React app
- `dev`: Starts the server and the React app concurrently
- `build`: Builds the app for production
- `test`: Runs tests (currently, no tests are specified)
- `eject`: Ejects the app from `create-react-app`

## Contributing

Contributions are welcome. Please make sure to update tests as appropriate.

## License

This project is licensed under the ISC license.
