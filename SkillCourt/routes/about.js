var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    res.render('about',
    {
        site: 'SkillCourt',
        page: 'About'
    });
});

module.exports = router;