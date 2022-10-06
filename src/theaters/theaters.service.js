const { json } = require("express/lib/response")
const knex = require("../db/connection")
const reduceProperties = require("../utils/reduce-properties")

const movies =reduceProperties("theater_id",{
    "movie_id": ["movies", null, "movie_id"],
    "title": ["movies", null, "title"],
    "rating": ["movies", null, "rating"],
    "runtime_in_minutes": ["movies", null,"runtime_in_minutes"],
    "description": ["movies", null,"description"],
    "image_url": ["movies", null, "image_url"],
    "created_at": ["movies", null, "created_at"],
    "updated_at": ["movies", null, "updated_at"],
    "is_showing": ["movies", null, "is_showing"],
    "theater_id": ["movies", null, "theater_id"]
})

async function list(){
    return knex ("theaters as t")
        .join("movies_theaters as mt", "mt.theater_id","t.theater_id")
        .join("movies as m", "m.movie_id", "mt.movie_id")
        .select("*")
        .then(movies)
}

module.exports = {
    list
}