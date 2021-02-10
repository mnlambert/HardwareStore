let Product = require('./Product');
let Category = require('./Category');

class NameChecker {

    checkProductNamesInCategory(category) {
        //first check if parameter being passed is a category
        if (category instanceof Category) {
            let differentProductNames = new Set();
            //second get the name of the product in a category
            for (let i = 0; i < category.productList.length; i++){
                //third check to see if names are duplicates
                differentProductNames.add(category.productList[i].name);
            }
            let result = Array.from(differentProductNames);
            //fourth return the different product names
            return result;
        }

    }
}

module.exports = NameChecker;