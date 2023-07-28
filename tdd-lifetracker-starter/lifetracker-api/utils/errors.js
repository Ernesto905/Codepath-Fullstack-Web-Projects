class ExpressError extends Error {
    constructor(message, status) {
        super()
        this.message = message
        this.status = status
    }
}

// 400 bad request error
class BadRequestError extends ExpressError {
    constructor(message = "Bad Request") {
        super(message, 400)
    }
}

// 401 UnauthorizedError
class UnauthorizedError extends ExpressError {
    constructor(message = "Unauthorized"){
        super(message, 401)
    }
}

// 403 Forbidden Error
class ForbiddenError extends ExpressError {
    constructor(message = "Forbidden") {
        super(message, 403)
    }
}

// 404 not found error
class NotFoundError extends ExpressError {
    constructor(message){
        super(message, 404)
    }
}
// 422 UnprocessableEntityError
class UnprocessableEntityError extends ExpressError {
    constructor(message = "Unprocessable Error"){
        super(message, 422)
    }
}

module.exports = {
    ExpressError,
    BadRequestError,
    UnauthorizedError,
    ForbiddenError,
    NotFoundError,
    UnprocessableEntityError,
}