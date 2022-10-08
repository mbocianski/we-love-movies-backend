//generic error handler uses below a status and message as default

function errorHandler(err, req, res, next){
        const {status = 500, message = "Something went wront"} = err  
        res.status(status).json({error: message})
     }

module.exports = errorHandler;