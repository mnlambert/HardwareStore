class NotACategoryError extends Error {
    constructor (message) {
        super(message);
        this.name = "NotACategoryError";
    }
} 

module.exports = NotACategoryError;