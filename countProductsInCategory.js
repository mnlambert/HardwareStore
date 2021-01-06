
const Category = require("./category");


function countProductsInCategory(category) {
    if (category instanceof Category) {
        return category.productList.length;
    }

    
}

module.exports = countProductsInCategory;