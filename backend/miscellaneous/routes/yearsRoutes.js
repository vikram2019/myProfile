let express = require('express');
let router = express.Router();
let YearController = require('../controller/yearsController');

router.post('/saveNewYear', (req, res, next)=>{
    let newYear = parseInt(req.body.year);
    YearController.saveYears(newYear).then(function(getSavedYear){
        if(getSavedYear){
            res.send({
                success : true,
                MSG : "Successfully get the Years",
                getSavedYear : getSavedYear
            })
        }else{
            res.send({
                success : false,
                MSG : "Error in saving the Year",
            })
        }
    }).catch((err)=>{
        if(err){
            res.send({
                success : false,
                MSG : "Error in saving the Year",
                Error : err
            })
        }
    })
});

router.get('/fetchAllYears', (req, res, next)=>{
    YearController.fetchYears().then((savedYears)=>{
        if(savedYears){
            res.send({
                success : true,
                MSG : "Successfully get the Years",
                savedYears : savedYears
            })
        }else{
            res.send({
                success : false,
                MSG : "Error in getting the Years",
            })
        }
    }).catch((err)=>{
        if(err){
            res.send({
                success : false,
                MSG : "Error in getting the Years",
                Error : err
            })
        }
    })
});


module.exports = router;