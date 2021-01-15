const Category = require("./category");
const HardwareStore = require("./hardwareStore");
const NotACategoryError = require("./NotACategoryError");
const NotAHardwareStoreError = require("./NotAHardwareStoreError");
class Counter {

    countProductsInCategory(category) {
        if (category instanceof Category) {
            let set1 = new Set();
            for (let i = 0; i < category.productList.length; i++) {
                set1.add(category.productList[i].name);
            }

            return set1.size;
        } else {
            throw new NotACategoryError("Not a Category");
        }

        
    }

}

module.exports = Counter;