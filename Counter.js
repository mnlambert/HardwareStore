const Category = require("./category");
const HardwareStore = require("./hardwareStore");
const NotACategoryError = require("./NotACategoryError");
const NotAHardwareStoreError = require("./NotAHardwareStoreError");
class Counter {
    countProductsInCategory(category) {

        if (category instanceof Category) {
            return category.productList.length;
        } else {
            throw new NotACategoryError("Please pass parameter of type Category.");
        }
    }

    countCategoriesInHardwareStore(hardwareStore) {
        if (hardwareStore instanceof HardwareStore) {
            return hardwareStore.categories.length;
        } else {
            throw new NotAHardwareStoreError("Please pass parameter of type HardwareStore.")
        }
    }


    countProductsInHardwareStore(hardwareStore) {
        if (hardwareStore instanceof HardwareStore) {
            let catsInHardwareStore = hardwareStore.categories;
            let numOfProductsInCategory = 0;
            for (let i = 0; i < catsInHardwareStore.length; i++){
                numOfProductsInCategory += this.countProductsInCategory(catsInHardwareStore[i]);
            }
            return numOfProductsInCategory;

        } else {
            throw new NotAHardwareStoreError("Please pass parameter of type HardwareStore.")
        }
    }

    countCategoriesInHardwareStoreList(hardwareStoreList) {
        let numOfCategoriesInHardwareStore = 0;
        for (let i = 0; i < hardwareStoreList.length; i++) {
            numOfCategoriesInHardwareStore += this.countCategoriesInHardwareStore(hardwareStoreList[i]);
        }

        return numOfCategoriesInHardwareStore;
    }

    countProductsInHardwareStoreList(hardwareStoreList) {
        let numOfProductsInHardwareStore = 0;
        for (let i = 0; i < hardwareStoreList.length; i++) {
            numOfProductsInHardwareStore += this.countProductsInHardwareStore(hardwareStoreList[i]);
        }

        return numOfProductsInHardwareStore;
    }
}

module.exports = Counter;