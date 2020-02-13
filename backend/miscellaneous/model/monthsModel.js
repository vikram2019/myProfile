let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let MonthsSchema = Schema({
    months:[
        type = String,
        required = false
    ],
    isTrue : {
        type : Boolean,
        required : false
    }
});

let Months = module.exports = mongoose.model('Months', MonthsSchema);