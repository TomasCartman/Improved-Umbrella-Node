const app = require('express')()
const consign = require('consign')

consign()
    .then('./config/routes.js')
    .into(app)

app.listen(process.env.PORT | 3001, () => {
    console.log('Backend executando...')
})