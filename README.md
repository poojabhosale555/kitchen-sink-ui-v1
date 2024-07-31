# Kitchen Sink UI V1 - React UI for Members Management

This is a React application for managing members, which connects to a Spring Boot REST API using MongoDB. It can display member data in a list format and create new members through the API.

## Requirements

- Node.js (v14 or later)
- npm (v6 or later)
- Spring Boot REST API (Running)
- MongoDB (Please refere Spring Boot Application readme.md)

## Setup

1. **Clone the repository:**

   ```sh
   git clone https://github.com/poojabhosale555/kitchen-sink-ui-v1

## Install dependencies

      - npx create-react-app kitchen-sink-ui-v1
      - npm install axios
      - npm install bootstrap
      - npm i react-bootstrap
      - npm i react-router-dom

## Connecting to the Spring Boot API
Ensure your Spring Boot REST API is running. By default, the React application assumes the API is accessible at http://localhost:8080. If your API is hosted at a different URL, update the api.js file accordingly. React Application uses AXIOS to connect to Kitchen Sink Rest APIs. Please update the axiosConfig.js incase URL is different.

      baseURL: 'http://localhost:8080'

## Running Kitchen Sink UI - React Application 
Please make sure the Kitchen Sink UI  home directory is selected.

      npm run start
