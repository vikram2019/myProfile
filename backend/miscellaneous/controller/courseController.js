let CourseOperation = require('../operation/courseOperation');
let Promise = require('promise');

let saveCourse = (parameter)=>{
    return new Promise((resolve, reject)=>{
        CourseOperation.saveNewCourse(parameter).then((savedCourse)=>{
            if(savedCourse){
                resolve(savedCourse)
            }else{
                reject("Error in saving the Course");
            }
        }).catch((err)=>{
            reject(err);
        });
    });
};

let fetchCourse = ()=>{
    return new Promise((resolve, reject)=>{
        CourseOperation.getAllCourse().then((allCourse)=>{
            if(allCourse){
                resolve(allCourse)
            }else{
                reject("Error in getting the Course");
            }
        }).catch((err)=>{
            reject(err);
        });
    });
};

module.exports = {
    saveCourse : saveCourse,
    fetchCourse : fetchCourse
}