let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let TechnologySchema = Schema({
    technology:{
        type : String,
        required : false
    },
    isTrue : {
        type : Boolean,
        required : false
    }
});

let Technology = module.exports = mongoose.model('Technology', TechnologySchema);