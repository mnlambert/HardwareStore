
const Category = require("./category");
const NotACategoryError = require("./NotACategoryError");

class Counter {
    countProductsInCategory(category) {

        if (category instanceof Category) {
            return category.productList.length;
        } else {
            throw new NotACategoryError("Here is my error");
        }
    }
}

module.exports = Counter;