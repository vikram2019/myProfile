let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let EducationModel = Schema({
    educationalQualification : {
        type : String,
        required : true
    },
    institute : {
        type : String,
        required : true
    },
    percent : {
        type : String,
        required : true
    },
    year : {
        type : String,
        required : true
    },
    isTrue : {
        type : Boolean,
        required : false
    }
});

let Education = module.exports = mongoose.model('Education', EducationModel);