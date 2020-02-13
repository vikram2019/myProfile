let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let ExpertiseSchema = Schema({
    expertise:{
        type : String,
        required : false
    },
    isTrue : {
        type : Boolean,
        required : false
    }
});

let Expertise = module.exports = mongoose.model('Expertise', ExpertiseSchema);