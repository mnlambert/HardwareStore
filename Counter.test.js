//These are also called Unit Tests
const { test, expect } = require("@jest/globals");
const { count } = require("yargs");
const Product = require("./product");
const Category = require("./category");
const Counter = require("./Counter");
const NotACategoryError = require("./NotACategoryError");

 

test('passing a Category for counting should return number of products', () => {
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