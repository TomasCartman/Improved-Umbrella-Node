module.exports = app => {
    app.get('/', (req, res) => {
        res.json({
            "Server working": true,
            "Time": Date.now()
        })
    })
}