# Use the official Node.js image based on Alpine Linux
FROM node:alpine

# Set the working directory within the container
WORKDIR /usr/app

# Copy your application files into the container
COPY . .

# Define the command to run your Node.js application
CMD ["node", "app.js"]
