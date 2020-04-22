const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    const { notExistsOrError } = app.api.validation

    const encryptPassword = password => {
        const salt =  bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password, salt)
    }

    const save = async (req, res) => {
        const user = { ...req.body }

        try {
            const userFromDB = await app.db('users')
                .where({ username: user.username }).first()

            notExistsOrError(userFromDB, 'Nome de usuário já cadastrado')
        } catch(msg) {
            return res.status(400).send(msg)
        }

        user.password = encryptPassword(user.password)
        delete user.confirmPassword

        app.db('users')
            .insert(user)
            .then(_ => res.status(204).send())
            .catch(err => res.status(500).send(err))
    }

    const get = (req, res) => {
        app.db('users')
            .select('username', 'name')
            .then(users => res.json(users))
            .catch(err => res.status(500).send(err))
    }

    const getByUsername = (req, res) => {
        app.db('users')
            .select('username', 'name')
            .where({ username: req.params.username })
            .first()
            .then(user => res.json(user))
            .catch(err => res.status(500).send(err))
    }

    return { save, get, getByUsername }
}