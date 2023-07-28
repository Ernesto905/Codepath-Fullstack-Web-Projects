/*Create a new error class that inherits from the base Error class:
 ExpressError:
 the constructor should accept two arguments - message and status
 it should then set a message property on new instances of the class that explains what went wrong
 it should alos set a status property on new instances of the class that represent the status code of the error.*/
class ExpressError extends Error{
    constructor(message, status){
        super();
        this.message = message
        this.status = status
    }
}

class BadRequestError extends Error {
    constructor(message = 'Bad Request') {
        super(message, 400)
    }
}

class NotFoundError extends Error {
    constructor(message = 'Not Found') {
        super(message, 404)
    }

}

module.exports = {ExpressError, BadRequestError, NotFoundError}
