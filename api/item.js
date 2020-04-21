module.exports = app => {
    
    const save = (req, res) => {
        const item = [ ...req.body ]

        // CHECK IF THE EXPENSE EXISTS IN DATABASE

        app.db('items')
            .insert(item)
            .then(_ => res.status(204).send())
            .catch(err => res.status(500).send(err))
    }

    const get = (req, res) => {
        app.db('items')
            .select()
            .then(items => res.json(items))
            .catch(err => res.status(500).send(err))
    }

    return { save, get }
}