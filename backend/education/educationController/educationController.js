let educationOperation = require('../educationOperation/educationOperation');
let Promise = require('promise');

/**
 * This is for saving the new education
 */
let saveNewEducation = (parameter)=>{
    return new Promise((resolve, reject)=>{
        educationOperation.saveEducation(parameter).then((savedEducation)=>{
            if(savedEducation){
                resolve(savedEducation);
            }else{
                reject("Error in saving the new education");
            }
        }).catch((err)=>{
            reject('Error in saving the education '+err);
        });
    });
};

/**
 * This is for getting all the education
 */
let getAllEducation = ()=>{
    return new Promise((resolve, reject)=>{
        educationOperation.getAllTheEducation().then((AllEducations)=>{
            if(AllEducations){
                resolve(AllEducations);
            }else{
                reject("Error in getting the education");
            }
        }).catch((err)=>{
            reject('Error in getting the education '+err);
        });
    });
};

/**
 * This is for getting the selected education
 */
let getSelectedEducation = (parameter)=>{
    return new Promise((resolve, reject)=>{
        educationOperation.selectedEducation(parameter).then((selectedEducations)=>{
            if(selectedEducations){
                resolve(selectedEducations);
            }else{
                reject("Error in getting the selected education");
            }
        }).catch((err)=>{
            reject('Error in getting the selected education '+err);
        });
    });
};

/**
 * This is for updating the education
 */
let updateEducation = (parameter)=>{
    console.log("------- update in controller ========= "+JSON.stringify(parameter));
    return new Promise((resolve, reject)=>{
        educationOperation.updatedEducation(parameter).then((updatedEducations)=>{
            console.log('======= updatedEducation in controller ======= '+updatedEducations);
            if(updatedEducations){
                resolve(updatedEducations);
            }else{
                reject("Error in updating the selected education");
            }
        }).catch((err)=>{
            reject('Error in updating the selected education '+err);
        });
    });
};

/**
 * This is for deleting the education
 */
let deleteEducation = (parameter)=>{
    return new Promise((resolve, reject)=>{
        educationOperation.deleteQualification(parameter).then((deletedEducation)=>{
            if(deletedEducation){
                resolve(deletedEducation);
            }else{
                reject("Error in deleting the selected education");
            }
        }).catch((err)=>{
            reject(err);
        });
    });
};

module.exports = {
    saveNewEducation : saveNewEducation,
    getAllEducation : getAllEducation,
    getSelectedEducation : getSelectedEducation,
    updateEducation : updateEducation,
    deleteEducation : deleteEducation
}