const express = require('express');
const app = express();

// this sets EJS as the view engine, so when i render pages below, i don't need to specifically write '.ejs'; not yet sure if it has more functionality but it's used in all of the EJS tutorials that i'm watching...
app.set("view engine", "ejs");

const RESTAURANT = {
    name: 'The Green Byte Bistro',
    isOpen: true,
    address: '742 Evergreen Rd, Mapleview, OS 45502',
    phone: '555-321-9876',
    menu: [
        {
            id: 1,
            name: 'Quantum Quinoa Mushroom Burger',
            price: 13.00,
            rating: 4,
            category: 'mains',
            details: 'A vegetarian burger made with a quinoa and mushroom patty, it will take you to another realm.'
        },
        {
            id: 2,
            name: 'Binary Berry Cheesecake',
            price: 10.11,
            rating: 3,
            category: 'desserts',
            details: 'A creamy cheesecake bursting with flavor. A mix of berries in every byte.'
        },
        {
            id: 3,
            name: 'Recursive Rigatoni',
            price: 17.00,
            rating: 5,
            category: 'mains',
            details: 'A classic rigatoni pasta dish, layered with rich tomato sauce and herbs. You\'ll keep coming back for more.'
        },
        {
            id: 4,
            name: 'Pumpkin Pi Squared',
            price: 3.14,
            rating: 5,
            category: 'desserts',
            details: 'A delightful pumpkin dessert, squared and spiced to perfection.'
        },
        {
            id: 5,
            name: 'Fibonacci String Bean Fries',
            price: 11.23,
            rating: 5,
            category: 'sides',
            details: 'Crispy and lightly seasoned string bean fries, served in a pattern for a fun twist.'
        }
    ]
}

app.get('/', (req, res) => {
    res.render('home', {
        RESTAURANT: RESTAURANT,
    });
});

app.get('/menu', (req, res) => {
    res.render('menu', {
        // with some help from chatgpt, this is how it seems i need to access the menu array
        menu: RESTAURANT.menu
    });
});

// exercise 3 and i'm stuck so i'm taking a break
app.get('/menu/:category', (req, res) => {
    const category = req.params.category;
    // changed the first letter to upper case (character at index 0) and added it back to the rest of the word (slice the letter at index 1 and onward)
    const capCategory = category.charAt(0).toUpperCase() + category.slice(1);
    // using the filter method to filter through all menu items and pulling them based on category
    const menuItems = RESTAURANT.menu.filter(item => item.category === category);
    // console.log(menuItems);
    res.render('category', {
        // passing all the variables defined above into the locals object
        category,
        capCategory,
        menuItems,
    });
});

app.listen(3000);