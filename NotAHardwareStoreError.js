class NotAHardwareStoreError extends Error {
    constructor (message) {
        super(message);
        this.name = "NotAHardwareStoreError";
    }
} 

module.exports = NotAHardwareStoreError;