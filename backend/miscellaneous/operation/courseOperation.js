let Promise = require('promise');
let CourseModel = require('../model/courseModel');

let saveNewCourse = (parameter)=>{
    let savingCourse = [];
    let alreadySavedCourseOccurence = 0;
    return new Promise((resolve, reject)=>{
        CourseModel.find().then(function(savedCourse){
            if(savedCourse.length > 0 && savedCourse[0].courses){
                if(savedCourse[0].courses){
                    savingCourse = savedCourse[0].courses;
                    for(var i=0; i<savingCourse.length; i++){
                        if(savingCourse[i].localeCompare(parameter) == 0){
                            alreadySavedCourseOccurence++;
                        }
                    }
                    if(alreadySavedCourseOccurence === 0){
                        savedCourse[0].courses.push(parameter);
                        CourseModel.findByIdAndUpdate(savedCourse[0]._id, savedCourse[0], {new: true}).then(function(savedCourseData){
                            if(savedCourseData){
                                resolve(savedCourseData)
                            }else{
                                reject('Error in saving the Course');
                            }
                        }).catch(function(err){
                            reject(err);
                        });
                    }else{
                        reject("This Course is already saved");
                    }
                }
            }else{
                let newCourse = {
                    courses : parameter,
                    isTrue : true
                }
                let newCourses = new CourseModel(newCourse);
                newCourses.save()
                .then(function(newCourseSaved){
                    if(newCourseSaved){
                        resolve(newCourseSaved);
                    }else{
                        reject('Error in saving the new Course');
                    }
                }).catch(function(err){
                    reject(err);
                })
            }
        })
    });
};

let getAllCourses = ()=>{
    return new Promise((resolve, reject)=>{
        CourseModel.find({isTrue : true})
                .exec()
                .then((totalCourses)=>{
                    if(totalCourses){
                        resolve(totalCourses)
                    }else{
                        reject('Error in getting the Courses');
                    }
                }).catch((err)=>{
                    reject(err);
                });
    });
};

module.exports = {
    saveNewCourse : saveNewCourse,
    getAllCourses : getAllCourses
}