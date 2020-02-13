let express = require('express');
let router = express.Router();
let educationController = require('../educationController/educationController');

router.post('/saveNewEducation', (req, res, next)=>{
    let newEducation = {
        educationalQualification : req.body.educationalQualification,
        institute : req.body.institute,
        percent : req.body.percent,
        year : req.body.year,
        isTrue : true
    }
    educationController.saveNewEducation(newEducation).then((savedEducation)=>{
        if(savedEducation){
            res.send({
                success : true,
                MSG : "Successfully saved the education",
                savedEducation : savedEducation
            })
        }else{
            res.send({
                success : false,
                MSG : "Error in saving the education",
            })
        }
    }).catch((err)=>{
        res.send({
            success : false,
            MSG : "Error in saving the education",
            Error : err
        })
    });
});

router.get('/getEducation', (req, res, next)=>{
    educationController.getAllEducation().then((allEducation)=>{
        if(allEducation){
            res.send({
                success : true,
                MSG : "Successfully get the education",
                allEducation : allEducation
            })
        }else{
            res.send({
                success : false,
                MSG : "Error in getting the education",
            })
        }
    }).catch((err)=>{
        res.send({
            success : false,
            MSG : "Error in getting the education",
            Error : err
        })
    });
});

router.post('/getSelectedEducation', (req, res, next)=>{
    let selectedEducation = req.body.education;
    educationController.getSelectedEducation(selectedEducation).then((selectedEducation)=>{
        if(selectedEducation){
            res.send({
                success : true,
                MSG : "Successfully get the education",
                selectedEducation : selectedEducation
            })
        }else{
            res.send({
                success : false,
                MSG : "Error in getting the selected education",
            })
        }
    }).catch((err)=>{
        res.send({
            success : false,
            MSG : "Error in getting the selected education",
            Error : err
        })
    });
});

router.post('/updateEducation', (req, res, next)=>{
    console.log("------- updateEducation ========= ");
    let updateEducation = {
        educationalQualification : req.body.educationalQualification,
        institute : req.body.institute,
        percent : req.body.percent,
        year : req.body.year,
    }
    educationController.updateEducation(updateEducation).then((updatedEducation)=>{
        console.log('======= updatedEducation in routes ======= '+updatedEducation);
        if(updatedEducation){
            res.send({
                success : true,
                MSG : "Successfully update the education",
                updatedEducation : updatedEducation
            })
        }else{
            res.send({
                success : false,
                MSG : "Error in updating the education",
            })
        }
    }).catch((err)=>{
        res.send({
            success : false,
            MSG : "Error in updating the education",
            Error : err
        })
    });
});

router.delete('/deleteEducation', (req, res, next)=>{
    let deletingEducation = req.body.education;
    educationController.deleteEducation(deletingEducation).then((deletedEducation)=>{
        if(deletedEducation){
            res.send({
                success : true,
                MSG : "Successfully deleting the education",
                deletedEducation : deletedEducation
            })
        }else{
            res.send({
                success : false,
                MSG : "Error in deleting the education",
            })
        }
    }).catch((err)=>{
        let error = err.toString();
        res.send({
            success : false,
            MSG : "Error in deleting the education",
            Error : error
        })
    });
});

module.exports = router;