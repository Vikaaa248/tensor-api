const user = require('../controllers/user.controller.js');

module.exports = (app) => {
    const recipes = require('../controllers/recipe.controller.js');

    app.post('/api/recipes', user.authWrapper(recipes.create));
    app.post('/api/recipes/:recipeId', user.authWrapper(recipes.update));
    app.delete('/api/recipes/:recipeId', user.authWrapper(recipes.delete));
    app.get('/api/recipes', recipes.findAll);
}