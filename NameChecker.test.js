const { TestScheduler } = require("jest");


test ('Check the different Product names within a Category', () => {
    let product1 = new Product("Hammer");
    let product2 = new Product("Screwdriver");
    let product3 = new Product("Hammer");
    let productList = [product1, product2, product3, product1];
    let category = new Category("Tools", productList);
    let actual = checkProductNamesInCategory(category);
    let expected = ["Hammer","Screwdriver"]; 
    expect(actual.toBe(expected));
});