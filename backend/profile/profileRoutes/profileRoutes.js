let express = require('express');
let router = express.Router();
let profileController = require('../profileController/profileController');
let circularJson = require('circular-json');

router.post('/saveNewProfile', (req, res, next)=>{
    let newProfile = {
        name : req.body.name,
        firstName : req.body.firstName,
        middleName : req.body.middleName,
        lastName : req.body.lastName,
        email : req.body.email,
        alternateEmail : req.body.alternateEmail,
        profileObjective : req.body.profileObjective,
        // profileSkills : req.body.profileSkills,
        education : req.body.education,
        "skills" : req.body.skills,
        address : {
            permanent : {
                adressLine1 : req.body.address.permanent.adressLine1,
                adressLine2 : req.body.address.permanent.adressLine2,
                city : req.body.address.permanent.city,
                district : req.body.address.permanent.district,
                state : req.body.address.permanent.state,
                country : req.body.address.permanent.country,
                pincode : req.body.address.permanent.pincode
            },
            correspondence : {
                adressLine1 : req.body.address.correspondence.adressLine1,
                adressLine2 : req.body.address.correspondence.adressLine2,
                city : req.body.address.correspondence.city,
                district : req.body.address.correspondence.district,
                state : req.body.address.correspondence.state,
                country : req.body.address.correspondence.country,
                pincode : req.body.address.correspondence.pincode
            }
        },
        dateOfBirth : {
            date : req.body.dateOfBirth.date,
            month : req.body.dateOfBirth.month,
            year : req.body.dateOfBirth.year
        },
        phone : {
            Mobile : req.body.phone.Mobile,
            alternateNumber : req.body.phone.alternateNumber,
            landLine : req.body.phone.landLine,
        },
        projects:req.body.projects,
        links:req.body.links,
        heading : req.body.heading,
        professionalSummary : req.body.professionalSummary,
        achivement : req.body.achivement,
        employer : req.body.employer,
        strength : req.body.strength,
        isTrue : true
    }
    // console.log('=========== new Profile ========= '+circularJson.stringify(newProfile));
    profileController.saveNewProfile(newProfile).then((savedProfile)=>{
        if(savedProfile){
            res.send({
                success : true,
                MSG : "Successfully saved the new profile",
                savedProfile : savedProfile
            })
        }else{
            res.send({
                success : false,
                MSG : "Error in saving the new profile",
            })
        }
    }).catch((err)=>{
        res.send({
            success : false,
            MSG : "Error in saving the new profile",
            Error : err.toString()
        })
    });
});

router.get('/getAllProfile', (req, res, next)=>{
    console.log('======= get profile routes ======== ');
    profileController.getAllProfile().then((allProfile)=>{
        if(allProfile){
            res.send({
                success : true,
                MSG : 'Fetching all the profile',
                allProfile : allProfile
            })
        }else{
            res.send({
                success : false,
                MSG : 'Error Fetching the profile',
            })
        }
    }).catch((err)=>{
        res.send({
            success : false,
            MSG : 'Error Fetching the profile',
            Error : err.toString()
        })
    });
});

router.post('/getSelectedProfile', (req, res, next)=>{
    let name = req.body.name;
    profileController.getSelectedProfile(name).then((selectedProfile)=>{
        if(selectedProfile){
            res.send({
                success : true,
                MSG : 'Successfully get the profile',
                selectedProfile : selectedProfile
            })
        }else{
            res.send({
                success : false,
                MSG : 'Error in getting the profile',
            })
        }
    }).catch((err)=>{
        res.send({
            success : false,
            MSG : 'Error in getting the profile',
            Error : err.toString()
        })
    })
})

router.post('/getPromiseAllShow', (req, res, next)=>{
    let newProfile = {
        name : req.body.name,
        firstName : req.body.firstName,
        middleName : req.body.middleName,
        lastName : req.body.lastName,
        email : req.body.email,
        alternateEmail : req.body.alternateEmail,
        profileObjective : req.body.profileObjective,
        // profileSkills : req.body.profileSkills,
        education : req.body.education,
        "skills" : req.body.skills,
        address : {
            permanent : {
                adressLine1 : req.body.address.permanent.adressLine1,
                adressLine2 : req.body.address.permanent.adressLine2,
                city : req.body.address.permanent.city,
                district : req.body.address.permanent.district,
                state : req.body.address.permanent.state,
                country : req.body.address.permanent.country,
                pincode : req.body.address.permanent.pincode
            },
            correspondence : {
                adressLine1 : req.body.address.correspondence.adressLine1,
                adressLine2 : req.body.address.correspondence.adressLine2,
                city : req.body.address.correspondence.city,
                district : req.body.address.correspondence.district,
                state : req.body.address.correspondence.state,
                country : req.body.address.correspondence.country,
                pincode : req.body.address.correspondence.pincode
            }
        },
        dateOfBirth : {
            date : req.body.dateOfBirth.date,
            month : req.body.dateOfBirth.month,
            year : req.body.dateOfBirth.year
        },
        phone : {
            Mobile : req.body.phone.Mobile,
            alternateNumber : req.body.phone.alternateNumber,
            landLine : req.body.phone.landLine,
        },
        projects:req.body.projects,
        links:req.body.links,
        heading : req.body.heading,
        professionalSummary : req.body.professionalSummary,
        achivement : req.body.achivement,
        employer : req.body.employer,
        strength : req.body.strength,
        isTrue : true
    }
    profileController.promiseAllShow(newProfile).then((data)=>{
        console.log('=========== data ======== @@@@@@@@ '+data);
        if(data){
            res.send({
                success : true,
                MSG : 'Successfully get the profile',
                selectedProfile : data
            })
        }else{
            res.send({
                success : false,
                MSG : 'Error in getting the profile',
            })
        }
    }).catch((err)=>{
        res.send({
            success : false,
            MSG : 'Error in getting the profile',
            Error : err.toString()
        })
    })
})

router.post('/updateProfile', (req, res, next)=>{
    let updateProfile = {
        name : req.body.name,
        email : req.body.email,
        profileObjective : req.body.profileObjective,
        "profileEducation" : req.body.profileEducation,
        "profileSkills" : req.body.profileSkills,
        address : {
            permanent : {
                adressLine1 : req.body.address.permanent.adressLine1,
                adressLine2 : req.body.address.permanent.adressLine2,
                city : req.body.address.permanent.city,
                district : req.body.address.permanent.district,
                state : req.body.address.permanent.state,
                country : req.body.address.permanent.country,
                pincode : req.body.address.permanent.pincode
            },
            correspondence : {
                adressLine1 : req.body.address.correspondence.adressLine1,
                adressLine2 : req.body.address.correspondence.adressLine2,
                city : req.body.address.correspondence.city,
                district : req.body.address.correspondence.district,
                state : req.body.address.correspondence.state,
                country : req.body.address.correspondence.country,
                pincode : req.body.address.correspondence.pincode
            }
        },
        alternateEmail : req.body.alternateEmail,
        dateOfBirth : {
            date : req.body.dateOfBirth.date,
            month : req.body.dateOfBirth.month,
            year : req.body.dateOfBirth.year
        },
        phone : {
            Mobile : req.body.phone.Mobile,
            alternateNumber : req.body.phone.alternateNumber,
            landLine : req.body.phone.landLine,
        },
        heading : req.body.heading,
        professionalSummary : req.body.professionalSummary,
        achivement : req.body.achivement,
        employer : req.body.employer,
        strength : req.body.strength,
        declairation : req.body.declairation,
        place : req.body.place,
        isTrue : true
    }
    profileController.updateProfile(updateProfile).then((updatedProfile)=>{
        if(updatedProfile){
            res.send({
                success : true,
                MSG : 'Successfully updated the profile',
                updatedProfile : updatedProfile
            })
        }else{
            res.send({
                success : false,
                MSG : 'Error in updating the profile',
            })
        }
    }).catch((err)=>{
        res.send({
            success : false,
            MSG : 'Error in updating the profile',
            Error : err.toString()
        })
    });
});

router.delete('/deleteProfile', (req, res, next)=>{
    let name = req.body.name;
    profileController.deleteProfile(name).then((deletedProfile)=>{
        if(deletedProfile){
            res.send({
                success : true,
                MSG : 'successfully deleted the profile',
                deletedProfile : deletedProfile
            })
        }else{
            res.send({
                success : false,
                MSG : 'Error in deleting the profile',
            })
        }
    }).catch((err)=>{
        res.send({
            success : false,
            MSG : 'Error in deleting the profile',
            Error : err.toString()
        })
    });
});


module.exports = router;