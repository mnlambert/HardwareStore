//These are also called Unit Tests
const { test, expect } = require("@jest/globals");
const { count } = require("yargs");
const Product = require("./product");
const Category = require("./category");
const Counter = require("./Counter");
const NotACategoryError = require("./NotACategoryError");
const NotAHardwareStoreError = require("./NotAHardwareStoreError");
const HardwareStore = require("./hardwareStore");

 

test('passing a Category for counting should return number of Products', () => {
    let product1 = new Product("Hammer");
    let product2 = new Product("Wrench");
    let product3 = new Product("Screwdriver");
    let productList = [product1, product2, product3];
    let counter = new Counter();
    let category = new Category("Tools", productList);
    expect(counter.countProductsInCategory(category)).toBe(productList.length);

});

test('not passing a Category for counting should return an error', () => {
    let productTest1 = new Product("Scissors");
    let counter = new Counter();
    expect(() => {
        counter.countProductsInCategory(productTest1)}
        ).toThrowError(NotACategoryError);
});

test('passing a HardwareStore for counting should return number of Categories', () => {
    let category1 = new Category("Tools", []);
    let category2 = new Category("Tools", []);
    let category3 = new Category("Tools", []);

    let categoryList = [category1,category2,category3];
    let hardwareStore = new HardwareStore("Tempe", categoryList);

    let counter = new Counter();

    expect(counter.countCategoriesInHardwareStore(hardwareStore)).toBe(categoryList.length);

});

test('not passing a HardwareStore for counting should return an error', () => {
    let categoryTest1 = new Category("Scissors");
    let counter = new Counter();
    expect(() => {
        counter.countCategoriesInHardwareStore(categoryTest1)}
        ).toThrowError(NotAHardwareStoreError);
});

test('passing a HardwareStore for counting should return number of Products', () => {
    let category1 = new Category("Tools", ["Hammer","Screwdriver"]);
    let category2 = new Category("Paint", ["Red paint", "Black paint", "White paint"]);
    let category3 = new Category("Wallpaper", ["Roses"]);

    let categoryList = [category1,category2,category3];
    let hardwareStore = new HardwareStore("Tempe", categoryList);

    let counter = new Counter();

    expect(counter.countProductsInHardwareStore(hardwareStore)).toBe(categoryList[0].productList.length + categoryList[1].productList.length + categoryList[2].productList.length);

});

test('not passing a HardwareStore for counting should return an error', () => {
    let categoryTest1 = new Category("Scissors");
    let counter = new Counter();
    expect(() => {
        counter.countProductsInHardwareStore(categoryTest1)}
        ).toThrowError(NotAHardwareStoreError); 
});

test('passing a HardwareStoreList for counting should return number of Categories', () => {
    let category1 = new Category("Tools", ["Hammer","Screwdriver"]);
    let category2 = new Category("Paint", ["Red paint", "Black paint", "White paint"]);
    let category3 = new Category("Wallpaper", ["Roses"]);

    let categoryList = [category1,category2,category3];
    let hardwareStore1 = new HardwareStore("Tempe", categoryList);
    let hardwareStore2 = new HardwareStore("Mesa", categoryList);
    let hardwareStore3 = new HardwareStore("Gilbert", categoryList);

    let hardwareStoreList = [hardwareStore1,hardwareStore2,hardwareStore3];

    let counter = new Counter();

    expect(counter.countCategoriesInHardwareStoreList(hardwareStoreList)).toBe(hardwareStoreList[0].categories.length + hardwareStoreList[1].categories.length + hardwareStoreList[2].categories.length);

});

test('passing a HardwareStoreList for counting should return number of Products', () => {
    let category1 = new Category("Tools", ["Hammer","Screwdriver"]);
    let category2 = new Category("Paint", ["Red paint", "Black paint", "White paint"]);
    let category3 = new Category("Wallpaper", ["Roses"]);

    let categoryList = [category1,category2,category3];
    let hardwareStore1 = new HardwareStore("Tempe", categoryList);
    let hardwareStore2 = new HardwareStore("Mesa", categoryList);
    let hardwareStore3 = new HardwareStore("Gilbert", categoryList);

    let hardwareStoreList = [hardwareStore1,hardwareStore2,hardwareStore3];

    let counter = new Counter();

    expect(counter.countProductsInHardwareStoreList(hardwareStoreList)).toBe(
        (hardwareStoreList[0].categories[0].productList.length 
            + hardwareStoreList[0].categories[1].productList.length
            + hardwareStoreList[0].categories[2].productList.length
            + hardwareStoreList[1].categories[0].productList.length 
            + hardwareStoreList[1].categories[1].productList.length
            + hardwareStoreList[1].categories[2].productList.length
            + hardwareStoreList[2].categories[0].productList.length 
            + hardwareStoreList[2].categories[1].productList.length
            + hardwareStoreList[2].categories[2].productList.length
        ));

});

