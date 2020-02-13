let YearsOperation = require('../operation/yearsOperation');
let Promise = require('promise');

let saveYears = (parameter)=>{
    return new Promise((resolve, reject)=>{
        YearsOperation.saveNewYear(parameter).then((savedYear)=>{
            if(savedYear){
                resolve(savedYear)
            }else{
                reject("Error in saving the year");
            }
        }).catch((err)=>{
            reject(err);
        });
    });
};

let fetchYears = ()=>{
    return new Promise((resolve, reject)=>{
        YearsOperation.getAllYears().then((allYears)=>{
            if(allYears){
                resolve(allYears)
            }else{
                reject("Error in getting the Years");
            }
        }).catch((err)=>{
            reject(err);
        });
    });
};

module.exports = {
    saveYears : saveYears,
    fetchYears : fetchYears
}