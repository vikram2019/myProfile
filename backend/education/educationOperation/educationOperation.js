let educationModel = require('../educationModel/educationModel');
let Promise = require('promise');

let saveEducation = (parameter)=>{
    return new Promise((resolve, reject)=>{
        let newEducation = new educationModel(parameter);
        newEducation.save()
                    .then((savedEducation)=>{
                        if(savedEducation){
                            resolve(savedEducation);
                        }else{
                            reject("Error in saving the new education");
                        }
                    }).catch((err)=>{
                        reject("Error in saving the new education "+err);
                    });
    });
};


let getAllTheEducation = ()=>{
    return new Promise((resolve, reject)=>{
        educationModel.find({isTrue : true})
                    .exec()
                    .then((allTheEducation)=>{
                        if(allTheEducation){
                            resolve(allTheEducation);
                        }else{
                            reject("Error in getting all the education");
                        }
                    }).catch((err)=>{
                        reject("Error in getting all the education "+err);
                    });
    });
};

let selectedEducation = (parameter)=>{
    return new Promise((resolve, reject)=>{
        educationModel.findOne(parameter.educationalQualification).then((qualificationData)=>{
            if(qualificationData){
                let id = qualificationData._id;
                educationModel.findByIdAndUpdate(id, {$set : parameter})
                    .exec()
                    .then((updatedData)=>{
                        if(updatedData){
                            resolve(updatedData);
                        }else{
                            reject("Error in updating the qualification");
                        }
                    }).catch((err)=>{
                        reject('Error in updating the qualification '+err);
                    });
            }else{
                reject("Error in fetching the qualification data");
            }
        }).catch((err)=>{
            reject("Error in fetching the qualification data "+err);
        });
    });
};

let updatedEducation = (parameter)=>{
    return new Promise((resolve, reject)=>{
        educationModel.findOne({educationalQualification : parameter.educationalQualification}).then((fetchedData)=>{
            let id = fetchedData._id;
            educationModel.findByIdAndUpdate(id, parameter,{new: true}).exec().then((updatedEducation)=>{
                if(updatedEducation){
                    resolve(updatedEducation);
                }else{
                    reject('Error in updating the education ');
                }
            }).catch((err)=>{
                reject('Error in updating the education '+err);
            });
        });
    })
};


let deleteQualification = (selectedQualification)=>{
    return new Promise((resolve, reject)=>{
        educationModel.findOneAndUpdate({'educationalQualification' : selectedQualification},{isTrue : false},{new: true})
            .exec()
            .then(()=>{
                resolve(true);
            }).catch((err)=>{
                reject(err);
            });
    });
};

module.exports = {
    saveEducation : saveEducation,
    getAllTheEducation : getAllTheEducation,
    selectedEducation : selectedEducation,
    updatedEducation : updatedEducation,
    deleteQualification : deleteQualification
}