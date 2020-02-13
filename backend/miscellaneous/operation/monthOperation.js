let Promise = require('promise');
let MonthModel = require('../model/monthsModel');

let saveNewMonth = (parameter)=>{
    let savingMonth = [];
    let alreadySavedMonthOccurence = 0;
    return new Promise((resolve, reject)=>{
        MonthModel.find().then(function(savedMonth){
            if(savedMonth.length > 0 && savedMonth[0].months){
                if(savedMonth[0].months){
                    savingMonth = savedMonth[0].months;
                    for(var i=0; i<savingMonth.length; i++){
                        if(savingMonth[i].localeCompare(parameter) == 0){
                            alreadySavedMonthOccurence++;
                        }
                    }
                    if(alreadySavedMonthOccurence === 0){
                        savedMonth[0].months.push(parameter);
                        MonthModel.findByIdAndUpdate(savedMonth[0]._id, savedMonth[0], {new: true}).then(function(savedMonthData){
                            if(savedMonthData){
                                resolve(savedMonthData)
                            }else{
                                reject('Error in saving the Month');
                            }
                        }).catch(function(err){
                            reject(err);
                        });
                    }else{
                        reject("This Month is already saved");
                    }
                }
            }else{
                let newMonth = {
                    months : parameter,
                    isTrue : true
                }
                let newMonths = new MonthModel(newMonth);
                newMonths.save()
                .then(function(newMonthSaved){
                    if(newMonthSaved){
                        resolve(newMonthSaved);
                    }else{
                        reject('Error in saving the new Month');
                    }
                }).catch(function(err){
                    reject(err);
                })
            }
        })
    });
};

let getAllMonths = ()=>{
    return new Promise((resolve, reject)=>{
        MonthModel.find({isTrue : true})
                .exec()
                .then((totalMonths)=>{
                    if(totalMonths){
                        resolve(totalMonths)
                    }else{
                        reject('Error in getting the Months');
                    }
                }).catch((err)=>{
                    reject(err);
                });
    });
};

module.exports = {
    saveNewMonth : saveNewMonth,
    getAllMonths : getAllMonths
}