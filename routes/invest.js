const express = require('express');

const router = express.Router();

const Project = require('../models/Project');

router.post('/', (req, res) => {
    const amount = req.body.amount;
    res.render('invest', { amount: amount });
});

// GET ROUTES
router.get('/', (req, res) => {
    res.redirect('projects')
});

router.get('/v/:id', async (req, res) => {
    const id = req.params.id;
    const project = await Project.findById(id);
    res.render('invest', { project: project })
});

module.exports = router;