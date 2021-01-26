Hardware Store
Description: This is a simple web page project of a Hardware Store. Below is the list of features and tasks that need to be created in order to function.
Coding Plan:
- 1st Project
- Frame of work
- Made with Test Driven Development (TDD)
- Proper Documentation
- Able to run project with 1 command line
- Ability to use:
    - Backend
    - Frontend
    - Database
    - RestAPI
    - CRUD

Idea:
- Hardware Store
    - Must have different categories of items it sells
    - Each category has products with in the category
        - i.e. Category: Tools --> Sub-Category: Wrench, Hammer, etc.
    - Functionalities
        - Count 
            - how many products each category 
            - how many categories in each hardware store
            - how many products in each hardware store
            - how many categories in all the hardware stores
            - how many products in all the hardware stores
            - duplicate categories should count as one
            - duplicate products should count as one
        - Rank 
            - Each location by number of products.
            - Each location by number of categories.
        - Search for products and tell user which locations have this product
        - If no stores have a product, then send error message (or state that the item is unavailable).
        - If no stores have a category, then send error message (or state that the item is unavailable).
        - Have a clickable drop down in order to: 
            - See categories for the location or all locations.
            - Click on a category and be able to see what products the category have.
        - CRUD for category, location, and products.
        - CRUD for category and products for a specific location.
        - UI for frontend. 

Goal End Date: January 31, 2021.

~ Project Journal ~ 

Date: 01/04/2021 
Message: Today, I have begun my quest to complete this Hardware Store project. I am getting the plans set in order to complete this project smoothly. This is my first message of the project. I will log each time I work on this project in order to keep a detailed log on progress and a 'how to' for the project as well. Lets do this! I began by adding some classes and testing them. I was successful in adding the classes and testing them to make sure they work!

Date: 01/05/2021
Message: Today is a new day! I will be doing some Test Driven Development with Javascript! Was able to write a simple Test using Jest! I can count how many products are in 1 category. I also tried to throw an error but was unsuccessful today. I will try again tomorrow and see where this project takes me. 

Date: 01/07/2021
Message: Today is a new day! I will try testing my error code and see if it returns this error. Go to this link for the accursed TDD for JS to test throwing errors in a function(https://medium.com/@afolabiwaheed/how-to-test-a-function-thats-expected-to-throw-error-in-jest-2419cc7c6462). After further research, I was able to test throwing an error in the function. 

Date: 01/09/2021
Message: Today was a pretty good day. I have completed the 'Count' portion of the Functionalities for my project. Using TDD, I had created various functions to check the number of products, categories, and hardware stores.

Date: 01/11/2021
Message: Today there was a discovery that there would be an issue with duplication of an object when counting. Today is the day to correct that. Tests have been modified to correct the issue of duplicates.

Date: 01/14/2021
Message: Today I was tasked with deleting all the functions inside of the Counter.js class and remaking them to practice coding and to make sure TDD is well recieved. Created a dictionary so that I can write some new words in my coding journey. I learned what a Set(), instanceOf, and what Memory Address means. Refer to dictionary. 

Date: 01/17/21
Message: Today I was tasked with deleting all the funstion inside of the Counter.js class and remaking them to practice coding and to make sure I understand TDD well. 

Date: 01/25/21
Message: Today I really struggles with understanding nested For Loops. I had a better grasp on how nested For Loops worked but tomorrow we will see. I have deteled the 'How many different Products are in a Hardware Store' in order to try to create it again tomorrow. 
