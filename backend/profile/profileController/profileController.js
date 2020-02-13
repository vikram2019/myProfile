let profileOperation = require('../profileOperation/profileOperation');
// let skillOperation = require('../../skills/skillsOperation/skillsOperation');
// let educationOperation = require('../../education/educationOperation/educationOperation');
let Promise = require('promise');


let saveNewProfile = (parameter)=>{
    // console.log('======== saving the new profile ======== '+JSON.stringify(parameter));
    return new Promise((resolve, reject)=>{
        profileOperation.saveTheProfile(parameter).then((savedProfile)=>{
            if(savedProfile){
                resolve(savedProfile);
            }else{
                reject('Error in saving the new profile');
            }
        }).catch((err)=>{
            reject(err);
        });
    });
};

let getAllProfile = ()=>{
    return new Promise((resolve,reject)=>{
        profileOperation.getTheProfile().then((allrecords)=>{
            if(allrecords){
                resolve(allrecords);
            }else{
                reject('Error in getting the records');
            }
        }).catch((err)=>{
            reject(err);
        });
    });
};

let getSelectedProfile = (parameter)=>{
    return new Promise((resolve, reject)=>{
        profileOperation.getTheSelectedProfile(parameter).then((selectedProfile)=>{
            if(selectedProfile){
                resolve(selectedProfile);
            }else{
                reject('Error in getting the selected profile');
            }
        }).catch((err)=>{
            reject(err);
        });
    });
};

let promiseAllShow = (parameter)=>{
    return new Promise((resolve, reject)=>{
        var promiseArray = [];

        // promiseArray.push(profileOperation.getTheSelectedProfile('Pawan'));
        promiseArray.push(profileOperation.getTheSelectedProfile('kanwal'));
        promiseArray.push(profileOperation.saveTheProfile(parameter));
        promiseArray.push(profileOperation.getTheSelectedProfile('ajay'));
        Promise.all(promiseArray).then(function(responseed){
            resolve(responseed);
        }).catch((err)=>{
                reject(err);
            });
    });
};

let updateProfile = (parameter)=>{
    return new Promise((resolve, reject)=>{
        profileOperation.updateTheProfile(parameter).then((updatedProfile)=>{
            if(updatedProfile){
                resolve(updatedProfile);
            }else{
                reject('Error in updating the profile');0
            }
        }).catch((err)=>{
            reject(err);
        });
    });
};

let deleteProfile = (parameter)=>{
    return new Promise((resolve, reject)=>{
        profileOperation.deleteTheProfile(parameter).then((deletedProfile)=>{
            if(deletedProfile){
                resolve(true);
            }else{
                reject('Error in deleting the profile');
            }
        }).catch((err)=>{
            reject(err);
        });
    });
};

module.exports = {
    saveNewProfile : saveNewProfile,
    getAllProfile : getAllProfile,
    getSelectedProfile : getSelectedProfile,
    updateProfile: updateProfile,
    deleteProfile : deleteProfile,
    promiseAllShow : promiseAllShow
}