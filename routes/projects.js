const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const Project = require('../models/Project');

// GET ROUTES
router.get('/', async (req, res) => {
    const projects = await Project.find({});
    res.render('projects', { projects: projects });
});

router.get('/v/:id', async (req, res) => {
    const id = req.params.id;
    const project = await Project.findById(id);
    res.render('project', { project: project });
});

router.get('/new', (req, res) => {
    res.render('newProject');
})



// POST ROUTES
router.post('/new', async (req, res) => {

    const { crop, duration, amount, location } = req.body;

    const newProject = new Project({
        crop,
        duration, 
        amount,
        location
    });

    await newProject.save();

    if (newProject){
        console.log(`New crpo added!`);
        // TODO: To fix routing
        res.redirect('../landing');
    } else {
        console.log(`Process failed`);
        res.redirect('newProject');
    }

});

// DELETE 
router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const project = await Project.findOneAndDelete(id);
    // TODO: To fix responses as well as authenticate the process
});


module.exports = router;