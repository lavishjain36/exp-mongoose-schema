var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({
    name:"Monu",
    email:"jainmonula@gmail.com",
    status:"Approved"
  })
});

module.exports = router;
