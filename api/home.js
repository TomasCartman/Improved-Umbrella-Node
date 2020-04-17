module.exports = app => {
    const serverTime = (req, res) => {
        res.json({
            "Server working": true,
            "Time": Date.now()
        })
    }

    return { serverTime }
}