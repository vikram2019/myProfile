let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let YearsSchema = Schema({
    years:[
        type = Number,
        required = false
    ],
    isTrue : {
        type : Boolean,
        required : false
    }
});

let Years = module.exports = mongoose.model('Years', YearsSchema);