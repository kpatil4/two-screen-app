// Import necessary modules
const express = require('express');

// The built-in HTTP module provides HTTP server functionalities
const http = require('http');

// Socket.io is a library that enables real-time bidirectional event-based communication
const socketIo = require('socket.io');

// Create an instance of the Express application
const app = express();

// Create an HTTP server instance using the Express application
const server = http.createServer(app);

// Initialize a Socket.io server instance attached to the HTTP server
const io = socketIo(server);

// Serve static files.
// This will serve all files in the 'public' directory to the root URL of the web server.
// For instance, a file `public/index.html` would be available at `http://localhost:3000/index.html`.
app.use(express.static('public'));

// Establish a connection listener for any incoming sockets (clients)
// When a client connects to this server, the callback function is executed
io.on('connection', (socket) => {
    // Listener for 'colorChange' event emitted from the client
    // When received, the server emits an 'updateColor' event to all connected clients with the color data
    socket.on('colorChange', (data) => {
        io.emit('updateColor', data);
    });

    // Listener for 'resetMainScreenToDefault' event emitted from the client
    // When received, the server emits a 'resetToDefaultState' event to all connected clients
    socket.on('resetMainScreenToDefault', () => {
        // console.log('Received resetMainScreenToDefault event');
        io.emit('resetToDefaultState');
        // console.log('Emitted resetToDefaultState event');

    });
});

// Start the HTTP and Socket.io server on port 3000
// The server will listen for requests on port 3000
server.listen(3000, () => {
    console.log('Server running on port 3000');
});


