const router = require('express').Router()
const { Project, User } = require('../models')

router.get('/', async (req, res) => {
    try {
        let projects = await Project.findAll()
        projects = projects.map(project => project.get({ plain: true }))
        res.render('home', { projects })
    } catch(err) {
        res.status(500).json(err)
    }
})

router.get('/project/:id', async (req, res) => {
    try {
        let project = await Project.findByPk(req.params.id)
        project = project.get({ plain: true })
        res.render('project', { project })
    } catch(err) {
        res.status(500).json(err)
    }
})

module.exports = router