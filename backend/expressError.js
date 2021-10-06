/**
 * This file contains error messages, extending the normal express error, 
 * so we can add a status code whenever there is an instance of an error
 */

class ExpressError extends Error {
    constructor(message, status) {
        super();
        this.message = message;
        this.status = status;
    }
}

/** 404 NOT FOUND */

class NotFoundError extends ExpressError {
    constructor(message = "Not found") {
        super(message, 404);
    }
}

/** 400 BAD REQUEST */

class BadRequestError extends ExpressError {
    constructor(message = "Bad request") {
        super(message, 400);
    }
}

/** 401 UNAUTHORIZED */

class UnauthorizedError extends ExpressError {
    constructor(message = "Unauthorized") {
        super(message, 401);
    }
}

/** 403 FORBIDDEN */

class ForbiddenError extends ExpressError {
    constructor(message = "Forbidden") {
        super(message, 403);
    }
}

module.exports = {
    ExpressError,
    NotFoundError,
    BadRequestError,
    UnauthorizedError,
    ForbiddenError
};