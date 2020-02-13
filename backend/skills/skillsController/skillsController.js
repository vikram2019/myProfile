let skillsOperation = require('../skillsOperation/skillsOperation');
let Promise = require('promise');

let saveSkills = (parameter)=>{
    return new Promise((resolve, reject)=>{
        skillsOperation.saveNewSkill(parameter).then((savedSkills)=>{
            if(savedSkills){
                resolve(savedSkills)
            }else{
                reject("Error in saving the skills");
            }
        }).catch((err)=>{
            reject(err);
        });
    });
};

let fetchSkills = ()=>{
    return new Promise((resolve, reject)=>{
        skillsOperation.getAllSkill().then((allSkills)=>{
            if(allSkills){
                resolve(allSkills)
            }else{
                reject("Error in saving the skills");
            }
        }).catch((err)=>{
            reject(err);
        });
    });
};

let fetchSelectedSkills = (slectedSkill)=>{
    return new Promise((resolve, reject)=>{
        skillsOperation.getSelectedSkills(slectedSkill).then((selectedSkillDetails)=>{
            if(selectedSkillDetails){
                resolve(selectedSkillDetails)
            }else{
                reject("Error in saving the skills");
            }
        }).catch((err)=>{
            reject(err);
        });
    });
};

let updateSelectedSkills = (slectedSkill)=>{
    return new Promise((resolve, reject)=>{
        skillsOperation.updateSkills(slectedSkill).then((updatedSkill)=>{
            if(updatedSkill == true){
                resolve(true)
            }else{
                reject("Error in saving the skills");
            }
        }).catch((err)=>{
            reject(err);
        });
    });
};

let deleteSelectedSkills = (slectedSkill)=>{
    return new Promise((resolve, reject)=>{
        skillsOperation.deleteSkills(slectedSkill).then((selectedSkillDeleted)=>{
            if(selectedSkillDeleted == true){
                resolve(true)
            }else{
                reject("Error in saving the skills");
            }
        }).catch((err)=>{
            reject(err);
        });
    });
};
module.exports = {
    saveSkills : saveSkills,
    fetchSkills : fetchSkills,
    fetchSelectedSkills : fetchSelectedSkills,
    updateSelectedSkills : updateSelectedSkills,
    deleteSelectedSkills : deleteSelectedSkills
}