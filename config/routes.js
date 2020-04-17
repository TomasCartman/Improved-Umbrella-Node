module.exports = app => {
    app.route('/')
        .get(app.api.home.serverTime)

    app.route('/users')
        .post(app.api.user.save)
        .get(app.api.user.get)

    app.route('/users/:username')
        .get(app.api.user.getByUsername)

    app.route('/expenses')
        .post(app.api.expense.save)
        .get(app.api.expense.get)

    app.route('/items')
        .post(app.api.item.save)
        .get(app.api.item.get)
} 