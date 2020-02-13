let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let CourseSchema = Schema({
    courses:[
        type = String,
        required = false
    ],
    isTrue : {
        type : Boolean,
        required : false
    }
});

let course = module.exports = mongoose.model('course', CourseSchema);