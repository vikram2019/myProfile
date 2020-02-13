let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let profileSchema = Schema({
    skills:{
        technologyName : {
            type : String,
            required : true
        },
        expertise : {
            type : String,
            required : true
        },
        experience : {
            year : {
                type : Number,
                required : true
            },
            month : {
                type : Number,
                required : true
            }
        }
    },
    isTrue : {
        type : Boolean,
        required : false
    }
});

let Skills = module.exports = mongoose.model('Skills', profileSchema);