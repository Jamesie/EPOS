const express = require('express')
const router = express.Router()

router.get('/menu', (req, res) => {
    const menuCategories = [
        {
          name: 'Soup',
          items: [
            { name: 'Soup 1', price: 5.99 },
            { name: 'Soup 2', price: 6.99 },
            { name: 'Soup 3', price: 7.99 },
            { name: 'Soup 4', price: 8.99 },
            { name: 'Soup 5', price: 9.99 },
          ],
        },
        {
          name: 'Appetizer',
          items: [
            { name: 'Appetizer 1', price: 3.99 },
            { name: 'Appetizer 2', price: 4.99 },
            { name: 'Appetizer 3', price: 5.99 },
            { name: 'Appetizer 4', price: 6.99 },
            { name: 'Appetizer 5', price: 7.99 },
          ],
        },
        {
          name: 'Dessert',
          items: [
            { name: 'Dessert 1', price: 3.99 },
            { name: 'Dessert 2', price: 4.99 },
            { name: 'Dessert 3', price: 5.99 },
            { name: 'Dessert 4', price: 6.99 },
            { name: 'Dessert 5', price: 7.99 },
          ],
        },
        {
          name: 'Hot Drinks',
          items: [
            { name: 'Hot Drinks 1', price: 3.99 },
            { name: 'Hot Drinks 2', price: 4.99 },
            { name: 'Hot Drinks 3', price: 5.99 },
            { name: 'Hot Drinks 4', price: 6.99 },
            { name: 'Hot Drinks 5', price: 7.99 },
          ],
        },
        {
          name: 'Cold Drinks',
          items: [
            { name: 'Cold Drinks 1', price: 3.99 },
            { name: 'Cold Drinks 2', price: 4.99 },
            { name: 'Cold Drinks 3', price: 5.99 },
            { name: 'Cold Drinks 4', price: 6.99 },
            { name: 'Cold Drinks 5', price: 7.99 },
          ],
        },
        {
          name: 'Alcohol',
          items: [
            { name: 'Alcohol 1', price: 3.99 },
            { name: 'Alcohol 2', price: 4.99 },
            { name: 'Alcohol 3', price: 5.99 },
            { name: 'Alcohol 4', price: 6.99 },
            { name: 'Alcohol 5', price: 7.99 },
          ],
        },
        {
          name: 'Entree',
          items: [
            { name: 'Entree 1', price: 3.99 },
            { name: 'Entree 2', price: 4.99 },
            { name: 'Entree 3', price: 5.99 },
            { name: 'Entree 4', price: 6.99 },
            { name: 'Entree 5', price: 7.99 },
          ],
        },
      ];

    res.json(menuCategories);
});

module.exports = router