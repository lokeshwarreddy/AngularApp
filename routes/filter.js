/**
 * Created by Lokesh Reddy on 4/21/2016.
 */
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('filters');
})

module.exports = router;