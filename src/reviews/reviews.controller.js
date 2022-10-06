const service = require("./reviews.service")
const asyncErrorBoundary = require("../errors/asyncErrorBoundary")


async function reviewIdExists(req,res,next){
    const {reviewId} = req.params;
    const data = await service.list();
    const foundReview = data.find((review) => reviewId == review.review_id);
    if (foundReview){
        res.locals.reviewId = foundReview;
        return next();
    }
    next({status: 404, message: "Review cannot be found"})
}

async function destroy(req,res){
    const {review_id} = res.locals.reviewId;
    console.log(review_id);
    await service.destroy(review_id);
    res.sendStatus(204);

}

module.exports = {
    delete: [asyncErrorBoundary(reviewIdExists), asyncErrorBoundary(destroy)]
}