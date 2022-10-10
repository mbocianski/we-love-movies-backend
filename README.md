# we-love-movies-backend

This project is the backend for the [We Love Movies Front End](https://github.com/Thinkful-Ed/starter-movie-front-end)

Highlights include SQL database connected to the app via server. Routes are organized cleanly by functionality for Movies, Review, and Theaters. Error handdling separated out so as to keep app componenet clean.
Controllers utilize AsyncErrorBoundary for more readable code. Migrations utilize knex and see provided data in the DB file.

Data is stored in URL provdied in .env file.

- Assembled the back end of a movie website allowing any user to search for their favorite movies.
- Used CRUD methods for reviews, and view theaters and movies that are showing. 
- Applied router and controller functions to retrieve a user's specific requests.
- Technology: Node.js, Express, and Knex. Version control with Git.

## How to View

Fork and clone the repository
Run npm install
Run npm start

## Endpoints

- GET /movies returns list of movies
- GET /movies?is_showing=true returns ilst of movies shwoing in theaters 
- GET /movies/:movieId returns specific movie data
- GET /movies/:movieId/theaters returns list of theaters for specific movie
- GET /movies/:movieId/reviews returns list of reviews for specific movie

- PUT /review/:reviewId updates a review
- DELETE /review/:reviewId deletes a review

- GET /theaters returns a list of theaters with what movies are playing

## Learnings

This project was a great exercise in building a server and database from scratch as well as linking them together to work with the provided client application. 
I became more comfortable in my ability to call, manipulate and manage data from a database using SQL, Knex, and Express. Mostly this is help develop a fuller picture of an entire full-stack application
