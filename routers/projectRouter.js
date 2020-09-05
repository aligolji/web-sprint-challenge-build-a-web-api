const express = require('express');
const Projects = require('../data/helpers/projectModel');

const router = express.Router();

//WORKING
router.get('/', (req, res) => {
    Projects.get()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ errorMessage: 'The projects information could not be retrieved', err })
        });
});

//WORKING
router.get('/:id', (req, res) => {
    Projects.get(req.params.id)
        .then(project => {
            if (project) {
                res.status(200).json(project);
            } else {
                res.status(404).json({ message: 'Project not found.' });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ errorMessage: 'The project information could not be retrieved', err });
        });
});

//WORKING
router.get('/:id/actions', (req, res) => {
    Projects.getProjectActions(req.params.id)
        .then(actions => {
            if (actions) {
                res.status(500).json(actions)
            } else {
                res.status(404).json({ message: 'Project not found.' })
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ errorMessage: 'The actions information could not be retrived.' });
        })
});

//WORKING
router.post('/', (req, res) => {
    Projects.insert(req.body)
        .then(project => {
            // if (name && description) {
            res.status(201).json(project);
            // } else if (!name || !description) {
            //     res.status(400).json({ message: 'Please provide name and description for the project.' });
            // }
        })
        .catch(err => {
            res.status(500).json({ error: 'There was an error while saving your project to the database.' });
        });
});

//WORKING
router.put('/:id', (req, res) => {
    Projects.update(req.params.id, req.body)
        .then(project => {
            console.log(project)
            if (project) {
                res.status(200).json(project);
            } else {
                res.status(404).json({ message: 'The project could not be found' });
            };
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: 'There was an error while updating your project.' });
        });
});

//WORKING
router.delete('/:id', (req, res) => {
    Projects.remove(req.params.id)
        .then(count => {
            if (count > 0) {
                res.status(200).json({ message: 'The project now ceases to exist.' })
            } else {
                res.status(404).json({ message: 'The project could not be found.' });
            }
        })
        .catch(err => {
            res.status(500).json({ error: 'Error deleting the project.' });
        })
});


module.exports = router;
