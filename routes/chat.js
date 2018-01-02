const express = require ('express');
const router = express.Router();

router.get('/', function(req, res, next){
  res.send('Express REST API');
})

module.exports = router;
