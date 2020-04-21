module.exports = app => {
    
    const save = (req, res) => {
        const expense = { ...req.body }

        // CHECK IF THE USERNAME EXISTS ON DATABASE

        app.db('expenses')
            .insert(expense, ['id'])
            .then(result => res.json(result))
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