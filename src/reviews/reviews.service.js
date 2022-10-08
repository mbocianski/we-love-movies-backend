const knex = require("../db/connection");
const mapProperties = require("../utils/map-properties")

//for creating nested critic data
const addCritic = mapProperties({
    preferred_name: "critic.preferred_name",
    surname: "critic.surname",
    organization_name: "critic.organization_name"
})

//list all reviews
async function list(){
    return knex("reviews")
        .select("*")
}

//delete review based on ID
async function destroy(review_id){
    return knex("reviews")
        .where({review_id})
        .del();
}

//update review based on specific data
async function update(updatedReview){
   return knex("reviews")
        .update(updatedReview, "*")
        .where({review_id: updatedReview.review_id})
        .then((updatedReview) => updatedReview[0])
    
}

//get critic data associated with review Id
async function getCritic(review_id){
    return knex("reviews as r")
    .join("critics as c", "r.critic_id", "c.critic_id")
    .select("*")
    .where ({review_id})
    .first()
    .then(addCritic)
}



module.exports = {
    list,
    destroy,
    update,
    getCritic
}

