let MonthsOperation = require('../operation/monthOperation');
let Promise = require('promise');

let saveMonths = (parameter)=>{
    return new Promise((resolve, reject)=>{
        MonthsOperation.saveNewMonth(parameter).then((savedMonth)=>{
            if(savedMonth){
                resolve(savedMonth)
            }else{
                reject("Error in saving the Month");
            }
        }).catch((err)=>{
            reject(err);
        });
    });
};

let fetchMonths = ()=>{
    return new Promise((resolve, reject)=>{
        MonthsOperation.getAllMonths().then((allMonths)=>{
            if(allMonths){
                resolve(allMonths)
            }else{
                reject("Error in getting the Months");
            }
        }).catch((err)=>{
            reject(err);
        });
    });
};

module.exports = {
    saveMonths : saveMonths,
    fetchMonths : fetchMonths
}