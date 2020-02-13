let express = require('express');
let router = express.Router();
let MonthController = require('../controller/monthController');

router.post('/saveNewMonth', (req, res, next)=>{
    let newMonth = req.body.month;
    MonthController.saveMonths(newMonth).then(function(getSavedMonth){
        if(getSavedMonth){
            res.send({
                success : true,
                MSG : "Successfully get the Months",
                getSavedMonth : getSavedMonth
            })
        }else{
            res.send({
                success : false,
                MSG : "Error in saving the Month",
            })
        }
    }).catch((err)=>{
        if(err){
            res.send({
                success : false,
                MSG : "Error in saving the Month",
                Error : err
            })
        }
    })
});

router.get('/fetchAllMonths', (req, res, next)=>{
    MonthController.fetchMonths().then((savedMonths)=>{
        if(savedMonths){
            res.send({
                success : true,
                MSG : "Successfully get the Months",
                savedMonths : savedMonths
            })
        }else{
            res.send({
                success : false,
                MSG : "Error in getting the Months",
            })
        }
    }).catch((err)=>{
        if(err){
            res.send({
                success : false,
                MSG : "Error in getting the Months",
                Error : err
            })
        }
    })
});


module.exports = router;