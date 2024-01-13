const  mongoose = require("mongoose")

const tutorSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    ageAndGender: {
     
        age: {
            type: Number,
            required: true,
        },
        gender: {
            type: String,
            required: true,
        },
    },
    experience: {
        type: String, default:"0 years"
    },
    city: {
        type: String,
    },
     preferedtime: {
        type: String,
    },
    pinCode: {
        type: String,
    },
    locality: {
        type: String,
    },
    contactInfo: [{
        phone: {
            type: String,
        },
        email: {
            type: String,
        },
        address: {
            type: String,
        },
    }],
})
const tutorModel = mongoose.model('tutor',tutorSchema)

module.exports={tutorModel}