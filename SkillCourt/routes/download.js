var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    res.render('download',
    {
        site: 'SkillCourt',
        page: 'Download'
    });
});

module.exports = router;