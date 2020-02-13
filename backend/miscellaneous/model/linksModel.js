let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let LinksSchema = Schema({
    links:[
        type = String,
        required = false
    ],
    isTrue : {
        type : Boolean,
        required : false
    }
});

let Links = module.exports = mongoose.model('Links', LinksSchema);