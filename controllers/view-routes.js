const router = require('express').Router()
const { Project, User } = require('../models')

router.get('/', async (req, res) => {
    try {
        let projects = await Project.findAll()
        projects = projects.map(project => project.get({ plain: true }))
        res.render('home', {
            projects,
            logged_in: req.session.logged_in
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

router.get('/project/:id', async (req, res) => {
    try {
        let project = await Project.findByPk(req.params.id)
        project = project.get({ plain: true })
        res.render('project', {
            project,
            logged_in: req.session.logged_in
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

router.get('/login', async (req, res) => {
    res.render('login')
})

module.exports = router