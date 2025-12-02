FROM node:22-alpine

WORKDIR /app

# Set environment variables that our app will use
ENV APP_NAME="My First Docker App"
ENV WELCOME_MESSAGE="Welcome to my Dockerized app!"
ENV PORT=3000

#Copy package files and install dependencies
COPY package*.json ./
RUN npm install

#Copy application code
COPY . .

#Expose the port the app runs on
EXPOSE 3000

#Start the application
CMD ["node", "index.js"]    