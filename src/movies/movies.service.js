const knex = require("../db/connection")

async function list() {
    return knex("movies").select("*");
}

async function listInTheaters(){
    return knex("movies as m")
            .join("movies_theaters as mt", "m.movie_id", "mt.movie_id")
            .join("theaters as t", "t.theater_id", "mt.theater_id")
            .select("m.*")
            .where({"mt.is_showing":true})
            .distinct()
}

async function read(movieId){
    return knex ("movies")
        .select("*")
        .where(`movie_id = ${movieId}`)
        .first();
}

module.exports = {
    list,
    listInTheaters,
    read
}