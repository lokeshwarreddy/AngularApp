var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/cells', function (req, res, next) {
    res.render('cells');
})

router.get('/directives', function (req, res, next) {
    res.render('directives');
})

router.get('/tabledata', function (req, res, next) {
    res.render('tabledata');
})

router.get('/listdata', function (req, res, next) {
    res.render('listdata');
})

router.get('/forms', function (req, res, next) {
    res.render('forms');
})

router.get("/loginform", function (req, res, next) {
    res.render("loginform");
})

router.get('/controllers', function (req, res, next) {
    res.render('controllers');
})

router.get('/scopeless', function (req, res, next) {
    res.render('scopeless');
})

router.get('/thirdparty', function (req, res, next) {
    res.render('thirdparty');
})

module.exports = router;
