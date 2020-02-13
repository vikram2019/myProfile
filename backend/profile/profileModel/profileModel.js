let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let ProfileSchema = Schema({
    name : {
        type : String,
        required : true
    },
    firstName : {
        type : String,
        required : true
    },
    middleName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    profileObjective : {
        type : String,
        required : true
    },
    post : {
        type : String,
        required : false
    },
    address : {
        permanent : {
            adressLine1 : {
                type : String,
                required : false
            },
            adressLine2 : {
                type : String,
                required : false
            },
            city : {
                type : String,
                required : false
            },
            district : {
                type : String,
                required : false
            },
            state : {
                type : String,
                required : false
            },
            country : {
                type : String,
                required : false
            },
            pincode : {
                type : String,
                required : false
            }
        },
        correspondence : {
            adressLine1 : {
                type : String,
                required : false
            },
            adressLine2 : {
                type : String,
                required : false
            },
            city : {
                type : String,
                required : false
            },
            district : {
                type : String,
                required : false
            },
            state : {
                type : String,
                required : false
            },
            country : {
                type : String,
                required : false
            },
            pincode : {
                type : String,
                required : false
            }
        }
    },
    email : {
        type : String,
        required : true
    },
    alternateEmail : {
        type : String,
        required : true
    },
    phone : {
        Mobile : {
            type : Number,
            required : true
        },
        alternateNumber : {
            type : Number,
            required : false
        },
        landLine : {
            type : Number,
            required : false
        }
    },
    dateOfBirth : {
        year : {
            type : Number,
            required : true
        },
        month : {
            type : String,
            required : true
        },
        date : {
            type : Number,
            required : true
        }
    },
    heading : {
        type : String,
        required : false
    },
    professionalSummary : {
        type : String,
        required : false
    },
    projects : [{
        title : {
            type : String,
            required : false
        },
        companyName : {
            type : String,
            required : false
        },
        description : {
            type : String,
            required : false
        },
        abbreviation:{
            type : String,
            required : false
        },
        responsibility : {
            firstPoint:{
                type : String,
                required : false
            },
            secondPoint:{
                type : String,
                required : false
            },
            thirdPoint:{
                type : String,
                required : false
            }
        }
    }],
    achivement : {
        type : String,
        required : false
    },
    employer : {
        type : String,
        required : true
    },
    strength : {
        type : String,
        required : true
    },
    links:[{
        linkName : {
            type : String,
            required : false
        },
        link : {
            type : String,
            required : false
        }
    }],
    skills:[{
        technologyName : {
            type : String,
            required : false
        },
        expertise : {
            type : String,
            required : false
        },
        experience : {
            year : {
                type : Number,
                required : false
            },
            month : {
                type : Number,
                required : false
            }
        }
    }],
    education:[{
        degree : {
            type : String,
            required : false
        },
        major : {
            type : String,
            required : false
        },
        institute : {
            type : String,
            required : false
        },
        percent : {
            type : String,
            required : false
        },
        yearOfPassout : {
            type : Number,
            required : false
        }
    }],
    isTrue : {
        type : Boolean,
        required : false
    }
});

let Profile = module.exports = mongoose.model('Profile', ProfileSchema);