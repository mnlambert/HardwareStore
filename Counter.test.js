//These are also called Unit Tests
const { test, expect } = require("@jest/globals");
const { count } = require("yargs");
const Product = require("./product");
const Category = require("./category");
const Counter = require("./Counter");
const NotACategoryError = require("./NotACategoryError");
const NotAHardwareStoreError = require("./NotAHardwareStoreError");
const HardwareStore = require("./hardwareStore");

 

test('passing a Category for counting should return number of different Product Names', () => {
    let product1 = new Product("Hammer");
    let product2 = new Product("Hammer");
    let product3 = new Product("Screwdriver");
    let productList = [product1, product1, product2, product3];
    let counter = new Counter();
    let category = new Category("Tools", productList);
    expect(counter.countProductsInCategory(category)).toBe(2);

});

test('not passing a Category for counting should return an error', () => {
    let productTest1 = new Product("Scissors");
    let counter = new Counter();
    expect(() => {
        counter.countProductsInCategory(productTest1)}
        ).toThrowError(NotACategoryError);
});

test('passing a HardwareStore for counting should return number of different Category names', () => {
    let category1 = new Category("Tools", []);
    let category2 = new Category("Tools", []);
    let category3 = new Category("Paint", []);

    let categoryList = [category1,category1,category2,category3];
    let hardwareStore = new HardwareStore("Tempe", categoryList);

    let counter = new Counter();

    expect(counter.countCategoriesInHardwareStore(hardwareStore)).toBe(2);

});

test('not passing a HardwareStore for counting should return an error', () => {
    let categoryTest1 = new Category("Scissors");
    let counter = new Counter();
    expect(() => {
        counter.countCategoriesInHardwareStore(categoryTest1)}
        ).toThrowError(NotAHardwareStoreError);
});

test('passing a HardwareStore for counting should return number of different Product names', () => {
    let product1 = new Product("Hammer");
    let product2 = new Product("Screwdriver");
    let product3 = new Product("Red paint");
    let product4 = new Product("Red paint");
    let product5 = new Product("White paint");
    let product6 = new Product("Roses Wallpaper");

    let category1 = new Category("Tools", [product1, product2]);
    let category2 = new Category("Paint", [product3, product4, product5]);
    let category3 = new Category("Wallpaper", [product1, product4, product6]);

    let categoryList = [category1,category2,category3];
    let hardwareStore = new HardwareStore("Tempe", categoryList);

    let counter = new Counter();

    expect(counter.countProductsInHardwareStore(hardwareStore)).toBe(5);

});

test('not passing a HardwareStore for counting should return an error', () => {
    let categoryTest1 = new Category("Scissors");
    let counter = new Counter();
    expect(() => {
        counter.countProductsInHardwareStore(categoryTest1)}
        ).toThrowError(NotAHardwareStoreError); 
});

test('passing a HardwareStoreList for counting should return number of different Category names', () => {
    let category1 = new Category("Tools", ["Hammer","Screwdriver"]);
    let category2 = new Category("Paint", ["Red paint", "Black paint", "White paint"]);
    let category3 = new Category("Wallpaper", ["Roses Wallpaper"]);
    let category4 = new Category("Lightbulbs", ["Hammer","Screwdriver"]);
    let category5 = new Category("Paint", ["Red paint", "Black paint", "White paint"]);
    let category6 = new Category("Wallpaper", ["Roses Wallpaper"]);

    let categoryList1 = [category1,category2,category3];
    let categoryList2 = [category3,category4,category5, category2];
    let categoryList3 = [category6,category1,category1];

    let hardwareStore1 = new HardwareStore("Tempe", categoryList1);
    let hardwareStore2 = new HardwareStore("Mesa", categoryList2);
    let hardwareStore3 = new HardwareStore("Gilbert", categoryList3);

    let hardwareStoreList = [hardwareStore1,hardwareStore2,hardwareStore3];

    let counter = new Counter();

    expect(counter.countCategoriesInHardwareStoreList(hardwareStoreList)).toBe(4);

});

test('passing a HardwareStoreList for counting should return number of different Product names', () => {
    let category1 = new Category("Tools", ["Hammer","Screwdriver"]);
    let category2 = new Category("Paint", ["Red paint", "Black paint", "White paint"]);
    let category3 = new Category("Wallpaper", ["Roses Wallpaper"]);
    let category4 = new Category("Tools", ["Hammer","Screwdriver"]);
    let category5 = new Category("Paint", ["Red paint", "Red paint", "Black paint", "White paint"]);
    let category6 = new Category("Wallpaper", ["Roses Wallpaper", "Roses Wallpaper"]);

    let categoryList1 = [category1,category2,category3];
    let categoryList2 = [category4,category6,category4];
    let categoryList3 = [category5,category3,category3];

    let hardwareStore1 = new HardwareStore("Tempe", categoryList1);
    let hardwareStore2 = new HardwareStore("Mesa", categoryList2);
    let hardwareStore3 = new HardwareStore("Gilbert", categoryList3);

    let hardwareStoreList = [hardwareStore1,hardwareStore2,hardwareStore3];

    let counter = new Counter();

    expect(counter.countProductsInHardwareStoreList(hardwareStoreList)).toBe(
        (6));

});

