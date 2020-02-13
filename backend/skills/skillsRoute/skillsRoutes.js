let express = require('express');
let router = express.Router();
let skillController = require('../skillsController/skillsController');

router.post('/saveNewSkills', (req, res, next)=>{
    let newSkills = {};
    newSkills.skills = {
        technologyName : req.body.skills.technologyName,
        expertise : req.body.skills.expertise,
        experience : {
            year : req.body.skills.experience.year,
            month : req.body.skills.experience.month,
        }
    }
    newSkills.isTrue = true;
    skillController.saveSkills(newSkills).then((savedSkills)=>{
        res.send({
            success : true,
            MSG : "successfully saved the skill",
            savedSkills : savedSkills
        });
    });
});

router.get('/fetchAllSkills', (req, res, next)=>{
    skillController.fetchSkills().then((savedSkills)=>{
        if(savedSkills){
            res.send({
                success : true,
                MSG : "Successfully get the skills",
                savedSkills : savedSkills
            })
        }else{
            res.send({
                success : false,
                MSG : "Error in getting the skills",
            })
        }
    }).catch((err)=>{
        if(err){
            res.send({
                success : false,
                MSG : "Error in getting the skills",
                Error : err
            })
        }
    })
});

router.post('/fetchSelectedSkills', (req, res, next)=>{
    let slectedSkill = req.body.selectedSkill;
    skillController.fetchSelectedSkills(slectedSkill).then((selectedSkillDetails)=>{
        if(selectedSkillDetails){
            res.send({
                success : true,
                MSG : "Successfully get the skills",
                selectedSkillDetails : selectedSkillDetails
            })
        }else{
            res.send({
                success : false,
                MSG : "Error in getting the skills",
            })
        }
    }).catch((err)=>{
        if(err){
            res.send({
                success : false,
                MSG : "Error in getting the skills",
                Error : err
            })
        }
    });
});


router.post('/updateSelectedSkills', (req, res, next)=>{
    let updateSkills = {};
    updateSkills.skills = {
        technologyName : req.body.skills.technologyName,
        expertise : req.body.skills.expertise,
        experience : {
            year : req.body.skills.experience.year,
            month : req.body.skills.experience.month,
        }
    }
    updateSkills.isTrue = true;
    let updateSelectedSkill = {
        selectedSkills :req.body.selectedSkill,
        updateSkills : updateSkills
    }
    console.log('========== updateSelectedSkill ============ '+JSON.stringify(updateSelectedSkill));
    skillController.updateSelectedSkills(updateSelectedSkill).then((updatedSkills)=>{
        if(updatedSkills){
            res.send({
                success : true,
                MSG : "Successfully updated the skills",
                updatedSkills : updatedSkills
            })
        }else{
            res.send({
                success : false,
                MSG : "Error in updating the skills",
            })
        }
    }).catch((err)=>{
        if(err){
            res.send({
                success : false,
                MSG : "Error in updating the skills",
                Error : err
            })
        }
    });
});

router.post('/deleteSelectedSkills', (req, res, next)=>{
    let deleteSelectedSkill = {
        selectedSkills :req.body.selectedSkill,
        isTrue : false
    }
    skillController.deleteSelectedSkills(deleteSelectedSkill).then((selectedSkillDeleted)=>{
        if(selectedSkillDeleted == true){
            res.send({
                success : true,
                MSG : "Successfully delete the skills",
            })
        }else{
            res.send({
                success : false,
                MSG : "Error in deleting the skills",
            })
        }
    }).catch((err)=>{
        if(err){
            res.send({
                success : false,
                MSG : "Error in deleting the skills",
                Error : err
            })
        }
    });
});

module.exports = router;