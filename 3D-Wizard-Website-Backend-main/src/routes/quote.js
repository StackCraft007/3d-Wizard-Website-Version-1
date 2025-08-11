const express = require('express');
const router = express.Router();
const { generateQuote, healthCheck } = require('../controllers/quoteController');

// Lightweight request logger
router.use((req, res, next) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(`[quote] ${req.method} ${req.originalUrl}`);
  }
  next();
});

// Quote routes
router.post('/generate', (req, res) => generateQuote(req, res));

router.get('/health', (req, res) => healthCheck(req, res));

module.exports = router;