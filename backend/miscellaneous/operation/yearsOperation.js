let Promise = require('promise');
let YearModel = require('../model/yearsModel');

let saveNewYear = (parameter)=>{
    let savingYear = [];
    let alreadySavedYearOccurence = 0;
    return new Promise((resolve, reject)=>{
        YearModel.find().then(function(savedYear){
            if(savedYear.length > 0 && savedYear[0].years){
                if(savedYear[0].years){
                    savingYear = savedYear[0].years;
                    for(var i=0; i<savingYear.length; i++){
                        if(savingYear[i] === parameter){
                            alreadySavedYearOccurence++;
                        }
                    }
                    if(alreadySavedYearOccurence === 0){
                        savedYear[0].years.push(parameter);
                        YearModel.findByIdAndUpdate(savedYear[0]._id, savedYear[0], {new: true}).then(function(savedYearData){
                            if(savedYearData){
                                resolve(savedYearData)
                            }else{
                                reject('Error in saving the year');
                            }
                        }).catch(function(err){
                            reject(err);
                        });
                    }else{
                        reject("This Year is already saved");
                    }
                }
            }else{
                let newYear = {
                    years : parameter,
                    isTrue : true
                }
                let newYears = new YearModel(newYear);
                newYears.save()
                .then(function(newYearSaved){
                    if(newYearSaved){
                        resolve(newYearSaved);
                    }else{
                        reject('Error in saving the new Year');
                    }
                }).catch(function(err){
                    reject(err);
                })
            }
        })
    });
};

let getAllYears = ()=>{
    return new Promise((resolve, reject)=>{
        YearModel.find({isTrue : true})
                .exec()
                .then((totalYears)=>{
                    if(totalYears){
                        resolve(totalYears)
                    }else{
                        reject('Error in getting the Years');
                    }
                }).catch((err)=>{
                    reject(err);
                });
    });
};

module.exports = {
    saveNewYear : saveNewYear,
    getAllYears : getAllYears
}