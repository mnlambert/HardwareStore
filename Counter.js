const Category = require("./category");
const HardwareStore = require("./hardwareStore");
const NotACategoryError = require("./NotACategoryError");
const NotAHardwareStoreError = require("./NotAHardwareStoreError");
class Counter {

    countProductsInCategory(category) {
        
        //check if passed item is of type Category
        if (category instanceof Category) {
            let set1 = new Set();
            //count how many products are in that category
            for (let i = 0; i < category.productList.length; i++) {
                set1.add(category.productList[i].name);
            }
            return set1.size;
        } else {
            throw new NotACategoryError();
        }

    }

}

module.exports = Counter;