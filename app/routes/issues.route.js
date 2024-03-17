const express = require('express');
const router = express.Router();
const controller = require('../controllers/issues.controller');

router.get('/api/issue', controller.getIssues);
router.post('/api/issue', controller.createIssue);
router.put('/api/issue/:id', controller.updateIssueById);
router.delete('/api/issue/:id', controller.deleteIssueById);

module.exports = router;