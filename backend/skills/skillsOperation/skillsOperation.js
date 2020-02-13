let Promise = require('promise');
let skillModel = require('../skillsModel/skillsModel');

let saveNewSkill = (parameter)=>{
    return new Promise((resolve, reject)=>{
        let newSkill = new skillModel(parameter);
        newSkill.save()
                .then((savedSkill)=>{
                    if(savedSkill){
                        resolve(savedSkill);
                    }else{
                        reject('Error in saving skill');
                    }
                }).catch((err)=>{
                    reject(err);
                });
    });
};

let getAllSkill = ()=>{
    return new Promise((resolve, reject)=>{
        skillModel.find({isTrue : true})
                .exec()
                .then((totalSkill)=>{
                    if(totalSkill){
                        resolve(totalSkill)
                    }else{
                        reject('Error in getting the kills');
                    }
                }).catch((err)=>{
                    reject(err);
                });
    });
};


let getSelectedSkills = (selectedSkill)=>{
    return new Promise((resolve, reject)=>{
        skillModel.findOne({'skills.technologyName' : selectedSkill})
                .exec()
                .then((selectedDetailsSkills)=>{
                    if(selectedDetailsSkills){
                        resolve(selectedDetailsSkills);
                    }else{
                        reject('Error in getting the selected skills');
                    }
                }).catch((err)=>{
                    reject(err);
                });
    });
};

let getMySkills = ()=>{
    return new Promise((resolve, reject)=>{
        skillModel.find
    })
}

let updateSkills = (updateSkills)=>{
    return new Promise((resolve, reject)=>{
        console.log('========== updateSkills in operation ============ '+JSON.stringify(updateSkills));
        // console.log('========== updateSkills in operation ============ '+updateSkills.selectedSkills);
        // console.log('========== .updateSkills.skills in operation ########## '+JSON.stringify(updateSkills.updateSkills.skills));
        skillModel.findOne({'skills.technologyName' : updateSkills.selectedSkills}).then((foundResult)=>{
            // console.log('========== .updateSkills.skills in operation @@@@@@@@@@ '+foundResult);
            let id = foundResult._id;
            console.log('========== updateSkills.updateSkills 111111111 '+JSON.stringify(updateSkills.updateSkills));
            skillModel.findByIdAndUpdate(id, updateSkills.updateSkills, {new: true} )
        // ,{ $set: {skills : updateSkills.updateSkills.skills} }
                .exec()
                .then((skills)=>{
                    console.log('========== Skills in operation ============ '+JSON.stringify(skills));
                    resolve(true);
                }).catch((err)=>{
                    reject(err);
                });
        }).catch((err)=>{
            reject(err);
        })
    });
};

let deleteSkills = (selectedSkills)=>{
    return new Promise((resolve, reject)=>{
        skillModel.findOneAndUpdate({'skills.technologyName' : selectedSkills.selectedSkills},{ $set: {isTrue : false} })
            .exec()
            .then(()=>{
                resolve(true);
            }).catch((err)=>{
                reject(err);
            });
    });
};

module.exports = {
    saveNewSkill : saveNewSkill,
    getAllSkill : getAllSkill,
    getSelectedSkills: getSelectedSkills,
    updateSkills : updateSkills,
    deleteSkills : deleteSkills
}