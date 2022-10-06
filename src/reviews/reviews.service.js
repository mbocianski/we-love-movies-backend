const knex = require("../db/connection");


async function list(){
    return knex("reviews")
        .select("review_id")
}

async function destroy(review_id){
    return knex("reviews")
        .where({review_id})
        .del();
}

module.exports = {
    list,
    destroy
}