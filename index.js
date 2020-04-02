const app = require('express')()
const consign = require('consign')

consign()
    .then('./config/routes.js')
    .into(app)

const port = 3001

app.listen(process.env.PORT || port, () => {
    console.log('Backend executando...')
})