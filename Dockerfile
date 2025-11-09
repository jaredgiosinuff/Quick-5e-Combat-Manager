# Use official Node.js LTS image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy application files
COPY server.js ./
COPY public ./public

# Expose port 9500
EXPOSE 9500

# Set environment variable for port
ENV PORT=9500

# Start the server
CMD ["node", "server.js"]
