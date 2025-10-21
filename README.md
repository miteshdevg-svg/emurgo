# News Explorer

**News Explorer** is a modern web application to browse and search news articles. Users can search by keyword or title, view article details, and open full articles in new tabs. The project consists of a backend API and a React frontend.

## Project Structure

* **news-api**: Backend API (Node.js/Express)
* **news-frontend**: Frontend React application
* **.gitignore**: Git ignore file
* **read.me**: Project documentation

## Technologies Used

**Frontend**

* React.js
* Plain CSS
* Flexbox & CSS Grid

**Backend**

* Node.js
* Express

**Other**

* Fetch API for HTTP requests

## Setup

### Clone Repository

Clone the project repository:

```bash
git clone https://github.com/miteshdevg-svg/emurgo.git
cd emurgo
```

### Backend

Setup and run the backend API:

```bash
cd news-api       # Navigate to backend folder
npm install       # Install dependencies
npm start         # Start backend server
```

* Default port: 5000
* API Endpoints:

  * `/articles?n=10` : Fetch latest 10 articles
  * `/search?keyword=<keyword>&n=10` : Search articles by keyword
  * `/title?title=<title>` : Search articles by title

### Frontend

Setup and run the React frontend:

```bash
cd news-frontend   # Navigate to frontend folder
npm install        # Install dependencies
npm start          # Start React development server
```

* Default port: 3000
* Notes:

  * Open [http://localhost:3000](http://localhost:3000) in your browser
  * Ensure backend is running before using the frontend
  * Update API URLs in `App.js` if backend port changes

## Usage

1. Enter a search term in the input field
2. Select Keyword or Title from the dropdown
3. Click Search
4. Browse the results in responsive cards
5. Click "Read Full Article" to open the original source in a new tab

## Future Improvements

* Dark/Light mode toggle
* Pagination or infinite scroll
* Integration with multiple news APIs
* Smooth animations using Framer Motion
* Unit and integration tests

## Author

**Mitesh Devganiya**

* Email: [miteshdevganiya177@gmail.com](mailto:miteshdevganiya177@gmail.com)
* GitHub: [https://github.com/miteshdevg-svg](https://github.com/miteshdevg-svg)
