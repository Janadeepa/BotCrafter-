const express = require('express');
const router = express.Router();
const generateCode = require('../services/codeGenerator');

router.post('/', async (req, res) => {
  const { platform, flow } = req.body;
  try {
    const zipPath = await generateCode(platform, flow);
    res.download(zipPath);
  } catch (err) {
    res.status(500).send('Generation error');
  }
});

module.exports = router;
