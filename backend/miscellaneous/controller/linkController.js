let LinkOperation = require('../operation/linkOperation');
let Promise = require('promise');

let saveLink = (parameter)=>{
    return new Promise((resolve, reject)=>{
        console.log('====== parameter ========= '+parameter);
        LinkOperation.saveNewLink(parameter).then((savedLink)=>{
            if(savedLink){
                resolve(savedLink)
            }else{
                reject("Error in saving the Link");
            }
        }).catch((err)=>{
            reject(err);
        });
    });
};

let fetchLink = ()=>{
    return new Promise((resolve, reject)=>{
        LinkOperation.getAllLinks().then((allLink)=>{
            if(allLink){
                resolve(allLink)
            }else{
                reject("Error in getting the Link");
            }
        }).catch((err)=>{
            reject(err);
        });
    });
};

module.exports = {
    saveLink : saveLink,
    fetchLink : fetchLink
}