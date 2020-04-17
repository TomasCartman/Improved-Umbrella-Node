module.exports = app => {
    app.route('/')
        .get(app.api.home.serverTime)

    app.route('/users')
        .post(app.api.user.save)
        .get(app.api.user.get)
}