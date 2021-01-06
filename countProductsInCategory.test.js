const { test, expect } = require("@jest/globals");
const { count } = require("yargs");
const Product = require("./product");
const Category = require("./category");
const countProductsInCategory = require("./countProductsInCategory");

test('passing category for counting should return number of products', () => {
    let product1 = new Product("Hammer");
    let product2 = new Product("Wrench");
    let product3 = new Product("Screwdriver");
    let productList = [product1, product2, product3];

    let category = new Category("Tools", productList);
    expect(countProductsInCategory(category)).toBe(productList.length);

});

test('not passing category for counting should return an error', () => {
    

});