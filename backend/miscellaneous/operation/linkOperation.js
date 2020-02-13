let Promise = require('promise');
let LinkModel = require('../model/linksModel');

let saveNewLink = (parameter)=>{
    let savingLink = [];
    let alreadySavedLinkOccurence = 0;
    return new Promise((resolve, reject)=>{
        LinkModel.find().then(function(savedLink){
            if(savedLink.length > 0 && savedLink[0].links){
                if(savedLink[0].links){
                    savingLink = savedLink[0].links;
                    for(var i=0; i<savingLink.length; i++){
                        if(savingLink[i].localeCompare(parameter) == 0){
                            alreadySavedLinkOccurence++;
                        }
                    }
                    if(alreadySavedLinkOccurence === 0){
                        savedLink[0].links.push(parameter);
                        LinkModel.findByIdAndUpdate(savedLink[0]._id, savedLink[0], {new: true}).then(function(savedLinkData){
                            if(savedLinkData){
                                resolve(savedLinkData)
                            }else{
                                reject('Error in saving the Link');
                            }
                        }).catch(function(err){
                            reject(err);
                        });
                    }else{
                        reject("This Link is already saved");
                    }
                }
            }else{
                let newLink = {
                    links : parameter,
                    isTrue : true
                }
                let newLinks = new LinkModel(newLink);
                newLinks.save()
                .then(function(newLinkSaved){
                    if(newLinkSaved){
                        resolve(newLinkSaved);
                    }else{
                        reject('Error in saving the new Link');
                    }
                }).catch(function(err){
                    reject(err);
                })
            }
        })
    });
};

let getAllLinks = ()=>{
    return new Promise((resolve, reject)=>{
        LinkModel.find({isTrue : true})
                .exec()
                .then((totalLinks)=>{
                    if(totalLinks){
                        resolve(totalLinks)
                    }else{
                        reject('Error in getting the Links');
                    }
                }).catch((err)=>{
                    reject(err);
                });
    });
};

module.exports = {
    saveNewLink : saveNewLink,
    getAllLinks : getAllLinks
}