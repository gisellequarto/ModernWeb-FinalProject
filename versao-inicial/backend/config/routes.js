module.exports = app => {
    app.route('/users')
        .post(app.api.user.save)
        .get(app.api.user.get)

    app.route('/users/:id')
        .put(app.api.user.save);
        //.get(app.api.user.getById)

    app.route('/categories')
        .get(app.api.category.get)
        .post(app.api.category.save);
        //.all(app.config.passport.authenticate())
    
     // Cuidado com ordem! Tem que vir antes de /categories/:id
     // Para tree não ser interpretado como um id
    app.route('/categories/tree')
        //.all(app.config.passport.authenticate())
        .get(app.api.category.getTree)


    app.route('/categories/:id')
        .get(app.api.category.getById)
        .put(app.api.category.save)
        .delete(app.api.category.remove);
        //.all(app.config.passport.authenticate())

    app.route('/articles')
        //.all(app.config.passport.authenticate())
        .get(app.api.article.get)
        .post(app.api.article.save)

    app.route('/articles/:id')
        //.all(app.config.passport.authenticate())
        .get(app.api.article.getById)
        .put(app.api.article.save)
        .delete(app.api.article.remove)

    app.route('/categories/:id/articles')
        //.all(app.config.passport.authenticate())
        .get(app.api.article.getByCategory)



}