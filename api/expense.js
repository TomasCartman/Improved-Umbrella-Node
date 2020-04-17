module.exports = app => {
    
    const save = (req, res) => {
        const expense = { ...req.body }

        app.db('expenses')
            .insert(expense)
            .then(_ => res.status(204).send())
            .catch(err => res.status(500).send(err))
    }

    const get = (req, res) => {
        app.db('expenses')
            .select()
            .then(expenses => res.json(expenses))
            .catch(err => res.status(500).send(err))
    }

    return { save, get }
}