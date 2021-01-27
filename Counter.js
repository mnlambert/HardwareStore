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

    countCategoriesInHardwareStore(hardwareStore) {
        if (hardwareStore instanceof HardwareStore) {
            let set2 = new Set();
            for (let i = 0; i < hardwareStore.categories.length; i++){
                set2.add(hardwareStore.categories[i].name);
            }
            return set2.size;
        } else {
            throw new NotAHardwareStoreError();
        }

    }

    countProductsInHardwareStore(hardwareStore) {
        if (hardwareStore instanceof HardwareStore) {
            let set3 = new Set();
            for (let j = 0; j < hardwareStore.categories.length; j++) {
                for (let k = 0; k < hardwareStore.categories[j].productList.length; k++) {                    
                    set3.add(hardwareStore.categories[j].productList[k].name);
                }
            } return set3.size;
        } else {
            throw new NotAHardwareStoreError();
        }
    }


}

module.exports = Counter;