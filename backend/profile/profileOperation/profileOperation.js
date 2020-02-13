let profileModel = require('../profileModel/profileModel');
let circularJson = require('circular-json');
let Promise = require('promise');

let saveTheProfile = (parameter)=>{
    return new Promise((resolve, reject)=>{
        // console.log('======= parameter in operation before saving ========== '+circularJson.stringify(parameter));
        let ProfileModel = new profileModel(parameter);
        ProfileModel.save()
            .then((savedProfile)=>{
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

let getTheProfile = ()=>{
    return new Promise((resolve, reject)=>{
        profileModel.find({isTrue : true}).then((allProfiles)=>{
            if(allProfiles){
                resolve(allProfiles);
            }else{
                reject('error in getting the profiles');
            }
        }).catch((err)=>{
            reject(err);
        });
    });
};

let getTheSelectedProfile = (parameter)=>{
    return new Promise((resolve, reject)=>{
        // console.log('======== slected profile name  ========= '+parameter);
        profileModel.findOne({firstName : parameter}).then((selectedProfile)=>{
            if(selectedProfile){
                // console.log('========= selectedProfile ======== '+selectedProfile)
                resolve(selectedProfile);
            }else{
                reject('Error in getting the selected profile');
            }
        }).catch((err)=>{
            reject(err);
        });
    });
};

let updateTheProfile = (parameter)=>{
    return new Promise((resolve, reject)=>{
        profileModel.findOne({name : parameter.name}).then((fetchingProfile)=>{
            if(fetchingProfile){
                let id = fetchingProfile._id;
                profileModel.findByIdAndUpdate(id, parameter, {new:true}).then((updatedProfile)=>{
                    if(updatedProfile){
                        resolve(updatedProfile);
                    }else{
                        reject('Error in updating the profile');
                    }
                }).catch((err)=>{
                    reject(err);
                });
            }else{
                reject('Error in fetching the profile');
            }
        }).catch((err)=>{
            reject(err);
        });
    });
};

let deleteTheProfile = (parameter)=>{
    return new Promise((resolve, reject)=>{
        profileModel.findOne({name : parameter}).then((fetchedProfile)=>{
            if(fetchedProfile){
                let id = fetchedProfile._id;
                profileModel.findByIdAndUpdate(id, {isTrue : false}, {new : false}).then((profileDeleted)=>{
                    if(profileDeleted){
                        resolve(true)
                    }else{
                        reject('Error in deleting the records');
                    }
                }).catch((err)=>{
                    reject(err);
                });
            }else{
                reject('Error in fetching the records for deletion');
            }
        }).catch((err)=>{
            reject(err);
        });
    });
};
module.exports = {
    saveTheProfile : saveTheProfile,
    getTheProfile : getTheProfile,
    getTheSelectedProfile : getTheSelectedProfile,
    updateTheProfile : updateTheProfile,
    deleteTheProfile : deleteTheProfile
}