const Recipe = require('../models/recipe.model');

exports.create = (req, res) => {

    // Validate request
    if (!req.body.title) {
        return res.status(400).send({
            message: "Не может быть пустым"
        });
    }
        // Validate request
        if (!req.body.composition) {
            return res.status(400).send({
                message: "Не может быть пустым"
            });
        }
            // Validate request
    if (!req.body.method_cook) {
        return res.status(400).send({
            message: "Не может быть пустым"
        });
    }

    // Create a Recipe
    const recipe = new Recipe({
        title: req.body.title,
        composition: req.body.composition,
        method_cook: req.body.method_cook
    });

    // Save Recipe in the database
    recipe.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Task."
            });
        });
};

exports.findAll = (req, res) => {
    Recipe.find({ 'title': req.title })
        .then(recipes => {
            res.send(recipes);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving tasks."
            });
        });
};


exports.update = (req, res) => {
    // Validate Request
    if (!req.body.title) {
        return res.status(400).send({
            message: "Имя рецепта не может быть пустым"
        });
    }
    if (!req.body.composition) {
        return res.status(400).send({
            message: "Состав не может быть пустым"
        });
    }
    if (!req.body.method_cook) {
        return res.status(400).send({
            message: "Способ приготовления не может быть пустым"
        });
    }

    // Find recipe and update it with the request body
    Recipe.findByIdAndUpdate(req.params.recipeId, {
        title: req.body.title,
        composition: req.body.composition,
        method_cook: req.body.method_cook
    })
        .then(recipe => {
            if (!recipe) {
                return res.status(404).send({
                    message: "Рецепт не найден с id " + req.params.recipeId
                });
            }
            res.send(recipe);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Рецепт не найден с id " + req.params.recipeId
                });
            }
            return res.status(500).send({
                message: "Ошибка обновления рецепта с id " + req.params.recipeId
            });
        });
};

exports.delete = (req, res) => {
    Recipe.findByIdAndRemove(req.params.recipeId)
        .then(recipe => {
            if (!recipe) {
                return res.status(404).send({
                    message: "Рецепт не найден с id " + req.params.recipeId
                });
            }
            res.send({ message: "Рецепт успешно удалён!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Рецепт не найден с id " + req.params.recipeId
                });
            }
            return res.status(500).send({
                message: "Ошибка удаление рецепта с id " + req.params.recipeId
            });
        });
};

exports.search = (req, res) => {
    Recipe.find({ 'composition': req.composition })
        .then(recipes => {
            res.send(recipes);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving tasks."
            });
        });
};