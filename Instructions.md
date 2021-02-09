Hello Mahogany, 

You will be tasked with creating a Hardware Store. You will use Test Driven Development to help conquer bugs and errors. Be mindful how you name functions, classes, and variable. It is okay if they are long (but not too long) but they just have to tell the person behind you what the class, function, or variable does. 
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Name: Hardware Store
Description: It is a simple web site where a person can come to hardwarestore.com (or a different name) and have the ability to do a number of things listed below under 'Functionalities' or 'Features'. The overall plan is that it will be made with Test Drivien Development (TDD), there will be proper documentation of this project, this project must be able to be ran with 1 command line, and it will use Frontend, Backend, Database, RestAPI, and CRUD.
~ Functionalities/Features ~
    ~~~~~~ Backend ~~~~~~~
    - Must have different Hardware Stores, Categories, and Products.
    - Each Hardware Store has 
        - Different categories
        - Different products
    - Each Category has products within the category
        - i.e Category: Tools --> Sub-Category: Wrench, Hammer, etc.
    - Count
        - how many products each category 
        - how many categories in each hardware store
        - how many products in each hardware store
        - how many categories in all the hardware stores
        - how many products in all the hardware stores
        - duplicate categories should count as one
        - duplicate products should count as one
Example of Tests. 
  √ passing a Category for counting should return number of different Product Names (1 ms)
  √ not passing a Category for counting should return an error (5 ms)
  √ passing a HardwareStore for counting should return number of different Category names
  √ not passing a HardwareStore for counting should return an error (1 ms)
  √ passing a HardwareStore for counting should return number of different Product names (16 ms)
  √ not passing a HardwareStore for counting should return an error (2 ms)
  √ passing a HardwareStoreList for counting should return number of different Category names (1 ms)
  × passing a HardwareStoreList for counting should return number of different Product names (2 ms)
    - Rank 
        - Each location by number of products
        - Each location by number of categories
    - Have the ability to search for products
    - Have the ability to seach with locations have a particular product
        - If no stores have a product, send error message.
        - If no stores have a category, send error message.
    - CRUD for category, location, and products.
    - CRUD for category and products for a specific location.
    ~~~~~ FrontEnd ~~~~~~
        - Have a clickable drop down in order to:
            - See categories for the location or all locations.
            - Click on a category and be able to see what products the category have.
        - UI for frontend. 

Goal End Date: February 28, 2021.