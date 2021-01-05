class HardwareStore {
    constructor(location, categories) {
        this.location = location;
        this.categories = categories;
    }

    addCategoryToStore(categoryName) {
        return this.categories.push(categoryName);
    }

}

module.exports = HardwareStore;