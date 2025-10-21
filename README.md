project:
  name: News Explorer
  description: >
    News Explorer is a modern web application to browse and search news articles.
    Users can search by keyword or title, view article details, and open full articles
    in new tabs. The project consists of a backend API and a React frontend.

structure:
  news-api: "Backend API (Node.js/Express)"
  news-frontend: "Frontend React application"
  .gitignore: "Git ignore file"
  read.me: "Project documentation"

technologies:
  frontend:
    - React.js
    - Plain CSS
    - Flexbox & CSS Grid
  backend:
    - Node.js
    - Express
  other:
    - Fetch API for HTTP requests

setup:
  clone_repository:
    description: "Clone the project repository"
    commands:
      - git clone https://github.com/miteshdevg-svg/emurgo.git
      - cd emurgo

  backend:
    description: "Setup and run the backend API"
    steps:
      - step: "Navigate to backend folder"
        command: cd news-api
      - step: "Install dependencies"
        command: npm install
      - step: "Start backend server"
        command: npm start
    default_port: 5000
    api_endpoints:
      - "/articles?n=10: Fetch latest 10 articles"
      - "/search?keyword=<keyword>&n=10: Search articles by keyword"
      - "/title?title=<title>: Search articles by title"

  frontend:
    description: "Setup and run the React frontend"
    steps:
      - step: "Navigate to frontend folder"
        command: cd news-frontend
      - step: "Install dependencies"
        command: npm install
      - step: "Start React development server"
        command: npm start
    default_port: 3000
    notes:
      - "Open http://localhost:3000 in your browser"
      - "Ensure backend is running before using the frontend"
      - "Update API URLs in App.js if backend port changes"

usage:
  steps:
    - "Enter a search term in the input field"
    - "Select Keyword or Title from the dropdown"
    - "Click Search"
    - "Browse the results in responsive cards"
    - "Click Read Full Article to open the original source in a new tab"

future_improvements:
  - "Dark/Light mode toggle"
  - "Pagination or infinite scroll"
  - "Integration with multiple news APIs"
  - "Smooth animations using Framer Motion"
  - "Unit and integration tests"

author:
  name: Mitesh Devganiya
  email: miteshdevganiya177@gmail.com
  github: https://github.com/miteshdevg-svg
