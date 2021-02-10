const { TestScheduler } = require("jest");


let Product = require('./Product');
let Category = require('./Category');
let NameChecker = require('./NameChecker');

test ('Check the different Product names within a Category', () => {
    let product1 = new Product("Hammer");
    let product2 = new Product("Screwdriver");
    let product3 = new Product("Hammer");
    let productList = [product1, product2, product3, product1];
    let category = new Category("Tools", productList);
    let nameChecker = new NameChecker();
    let actual = nameChecker.checkProductNamesInCategory(category);
    let expected = ["Hammer", "Screwdriver"];
    expect(actual).toStrictEqual(expected);
});