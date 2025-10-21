project:                       # Level 0
  name: News Explorer           # Level 1
  description: >                # Level 1
    News Explorer is a modern web application to browse and search news articles.
    Users can search by keyword or title, view article details, and open full articles
    in new tabs. The project consists of a backend API and a React frontend.

structure:                      # Level 0
  news-api: "Backend API (Node.js/Express)"    # Level 1
  news-frontend: "Frontend React application" # Level 1
  .gitignore: "Git ignore file"               # Level 1
  read.me: "Project documentation"            # Level 1

technologies:                  # Level 0
  frontend:                     # Level 1
    - React.js                  # Level 2
    - Plain CSS                 # Level 2
    - Flexbox & CSS Grid        # Level 2
  backend:                      # Level 1
    - Node.js                   # Level 2
    - Express                   # Level 2
  other:                        # Level 1
    - Fetch API for HTTP requests  # Level 2

setup:                          # Level 0
  clone_repository:             # Level 1
    description: "Clone the project repository"  # Level 2
    commands:                   # Level 2
      - git clone https://github.com/miteshdevg-svg/emurgo.git  # Level 3
      - cd emurgo              # Level 3

  backend:                      # Level 1
    description: "Setup and run the backend API"   # Level 2
    steps:                      # Level 2
      - step: "Navigate to backend folder"        # Level 3
        command: cd news-api                        # Level 4
      - step: "Install dependencies"              # Level 3
        command: npm install                        # Level 4
      - step: "Start backend server"              # Level 3
        command: npm start                          # Level 4
    default_port: 5000                               # Level 2
    api_endpoints:                                   # Level 2
      - "/articles?n=10: Fetch latest 10 articles"  # Level 3
      - "/search?keyword=<keyword>&n=10: Search articles by keyword"  # Level 3
      - "/title?title=<title>: Search articles by title"              # Level 3

  frontend:                     # Level 1
    description: "Setup and run the React frontend"  # Level 2
    steps:                      # Level 2
      - step: "Navigate to frontend folder"       # Level 3
        command: cd news-frontend                 # Level 4
      - step: "Install dependencies"              # Level 3
        command: npm install                        # Level 4
      - step: "Start React development server"    # Level 3
        command: npm start                          # Level 4
    default_port: 3000                               # Level 2
    notes:                                           # Level 2
      - "Open http://localhost:3000 in your browser" # Level 3
      - "Ensure backend is running before using the frontend" # Level 3
      - "Update API URLs in App.js if backend port changes" # Level 3

usage:                        # Level 0
  steps:                       # Level 1
    - "Enter a search term in the input field"  # Level 2
    - "Select Keyword or Title from the dropdown"  # Level 2
    - "Click Search"                               # Level 2
    - "Browse the results in responsive cards"     # Level 2
    - "Click Read Full Article to open the original source in a new tab" # Level 2

future_improvements:         # Level 0
  - "Dark/Light mode toggle"   # Level 1
  - "Pagination or infinite scroll" # Level 1
  - "Integration with multiple news APIs" # Level 1
  - "Smooth animations using Framer Motion" # Level 1
  - "Unit and integration tests" # Level 1

author:                      # Level 0
  name: Mitesh Devganiya     # Level 1
  email: miteshdevganiya177@gmail.com # Level 1
  github: https://github.com/miteshdevg-svg # Level 1
