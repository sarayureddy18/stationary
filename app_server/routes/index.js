var express = require('express');
var router = express.Router();
var ctrlLocation=require('../controller/location')
var ctrlOthers=require('../controller/others')
router.get('/',ctrlLocation.homelist);
router.get('/location',ctrlLocation.locationInfo)
router.get('/locationc',ctrlLocation.locationInfo2)
router.get('/locationd',ctrlLocation.locationInfo3)
router.get('/location/review/new',ctrlLocation.addReview);
router.get('/about',ctrlOthers.about)
module.exports = router;
