let express = require('express');
let router = express.Router();
let CourseController = require('../controller/courseController');

router.post('/saveNewCourse', (req, res, next)=>{
    let newCourse = req.body.courses;
    CourseController.saveCourse(newCourse).then(function(getSavedCourse){
        if(getSavedCourse){
            res.send({
                success : true,
                MSG : "Successfully get the Courses",
                getSavedCourse : getSavedCourse
            })
        }else{
            res.send({
                success : false,
                MSG : "Error in saving the Course",
            })
        }
    }).catch((err)=>{
        if(err){
            res.send({
                success : false,
                MSG : "Error in saving the Course",
                Error : err
            })
        }
    })
});

router.get('/fetchAllCourses', (req, res, next)=>{
    CourseController.fetchCourse().then((savedCourses)=>{
        if(savedCourses){
            res.send({
                success : true,
                MSG : "Successfully get the Courses",
                savedCourses : savedCourses
            })
        }else{
            res.send({
                success : false,
                MSG : "Error in getting the Courses",
            })
        }
    }).catch((err)=>{
        if(err){
            res.send({
                success : false,
                MSG : "Error in getting the Courses",
                Error : err
            })
        }
    })
});


module.exports = router;