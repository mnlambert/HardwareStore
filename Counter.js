const Product = require("./product");
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
            for (let i = 0; i < hardwareStore.categories.length; i++) {
                set2.add(hardwareStore.categories[i].name);
            }
            return set2.size;
        } else {
            throw new NotAHardwareStoreError();
        }

    }

    countProductsInHardwareStore(hardwareStore) {
        let arrOfProductsInHardwareStore = [];
        console.log(typeof hardwareStore);
        if (hardwareStore instanceof HardwareStore) {
            

            for (let j = 0; j < hardwareStore.categories.length; j++) {
                let arrOfProductsInAcategory = this.returnArrayOfProductsInACategory(hardwareStore.categories[j]);
                arrOfProductsInHardwareStore = 
                arrOfProductsInHardwareStore.concat(arrOfProductsInAcategory);
            } return arrOfProductsInHardwareStore;
        } 
        else {
            throw new NotAHardwareStoreError();
        }
    }

    countCategoriesInHardwareStoreList(hardwareStoreList) {
        let set4 = new Set();
        for (let l = 0; l < hardwareStoreList.length; l++) {
            if (hardwareStoreList[l] instanceof HardwareStore) {
                for (let m = 0; m < hardwareStoreList[l].categories.length; m++) {
                    set4.add(hardwareStoreList[l].categories[m].name);
                }
            } else {
                throw new NotAHardwareStoreError();
            }
        } return set4.size;

    }

    countProductsInHardwareStoreList(hardwareStoreList) {
        let arrOfProductsInAcategory = [];
        for (let n = 0; hardwareStoreList.length; n++) {
            let arrOfProductsInCategories = this.countProductsInHardwareStore(hardwareStoreList[n]);
            console.log(hardwareStoreList[n]);
            arrOfProductsInAcategory = arrOfProductsInAcategory.concat(arrOfProductsInCategories);
        } return arrOfProductsInAcategory;
    }

    returnArrayOfProductsInACategory(category) {
        let arrOfProductsInAcategory = [];
        if (category instanceof Category) {
            for (let i = 0; i < category.productList.length; i++) {
                if (category.productList[i] instanceof Product) {
                    arrOfProductsInAcategory.push(category.productList[i].name);
                }

            }
            return arrOfProductsInAcategory;
        } else {
            throw new NotACategoryError();
        }
    }

}

module.exports = Counter;