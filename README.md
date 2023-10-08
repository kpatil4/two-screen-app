# Two-Screen-App

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Project Structure](#project-structure)
- [Installation and Setup](#installation-and-setup)
- [Libraries Used](#libraries-used)

## Introduction

The `two-screen-app` demonstrates real-time bi-directional communication using WebSockets. It consists of two screens: `touchScreen` and `mainScreen`. The touch screen provides interactive buttons that users can press, while the main screen reflects the actions made on the touch screen in real-time.

## Features

- Real-time color change on `mainScreen` based on button press in `touchScreen`.
- Count dashboard on `touchScreen` which keeps track of color button clicks.
- Refresh functionality to reset color count.

## Prerequisites

Before setting up the `two-screen-app`, ensure you have the following software installed on your machine:

- Node.js (version 14+ recommended)
- npm (Node Package Manager, typically comes bundled with Node.js)
- Modern web browser (Chrome, Firefox, etc.)

## Project Structure

- **Public Directory**: Contains frontend HTML, CSS, and client-side JavaScript.
  - `touchScreen.html`: User interface for the touch screen.
  - `mainScreen.html`: Display screen that reflects touch screen interactions.
  
- **Server**: Backend logic for serving static files and handling WebSocket communications.
  - `server.js`: Main server file to set up and run the application.

## Installation and Setup

### Installing Dependencies

1. Navigate to the project directory:
```
cd two-screen-app
```

2. Install the required dependencies:
```
npm install
```

### Running the Application

To run the `two-screen-app`, use the following command in the project's root directory:
```
npm start
```

Once the server is running, you can access:

- `touchScreen` at `http://localhost:3000/touchScreen.html`
- `mainScreen` at `http://localhost:3000/mainScreen.html`

## Libraries Used

- **Express**: A minimal web application framework used to serve static files and handle routing.
- **Socket.io**: Enables real-time, bidirectional communication between the web client and server.

For testing purposes (if implemented):

- **Mocha**: A test framework running on Node.js.
- **Chai**: An assertion library for Node and browsers paired with Mocha.
- **Supertest**: Used for testing HTTP assertions.
