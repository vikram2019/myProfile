let express = require('express');
let router = express.Router();
let LinkController = require('../controller/linkController');

router.post('/saveNewLink', (req, res, next)=>{
    let newLink = req.body.link;
    LinkController.saveLink(newLink).then(function(getSavedLink){
        if(getSavedLink){
            res.send({
                success : true,
                MSG : "Successfully get the Links",
                getSavedLink : getSavedLink
            })
        }else{
            res.send({
                success : false,
                MSG : "Error in saving the Link",
            })
        }
    }).catch((err)=>{
        if(err){
            res.send({
                success : false,
                MSG : "Error in saving the Link",
                Error : err
            })
        }
    })
});

router.get('/fetchAllLinks', (req, res, next)=>{
    LinkController.fetchLink().then((savedLinks)=>{
        if(savedLinks){
            res.send({
                success : true,
                MSG : "Successfully get the Links",
                savedLinks : savedLinks
            })
        }else{
            res.send({
                success : false,
                MSG : "Error in getting the Links",
            })
        }
    }).catch((err)=>{
        if(err){
            res.send({
                success : false,
                MSG : "Error in getting the Links",
                Error : err
            })
        }
    })
});


module.exports = router;