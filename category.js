class Category {
    constructor(name, productList) {
        this.name = name;
        this.productList = productList;
    }

    addProductToCategory(productName) {
        return this.productList.push(productName);
    }
}

module.exports = Category;