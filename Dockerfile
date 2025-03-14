# Use official Node.js image
FROM node:16

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 3000 (Node.js app port)
EXPOSE 3000

# Command to run the Node.js app
CMD ["node", "server.js"]
