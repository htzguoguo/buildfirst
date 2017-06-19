/**
 * Created by Administrator on 2017/4/25.
 */

var mongoose = require( 'mongoose' ),
    contactSchema = new mongoose.Schema( {
        primarycontactnumber : {
            type : String,
            index : {
                unique : true
            }
        },
        name : String,
        address : String,
        birthdate : Date,
        phones : [
            {
                description : String,
                phone : String
             }
             ],
        emails: [
            {
                description : String,
                email : String
            }
        ],
        facebook: String,
        twitter: String,
        github: String,
        google: String,
        avatar : {
            file : String,
            url : String
        },
        portrait : []
    } ),
    Contact = mongoose.model( 'Contact', contactSchema );

module.exports = Contact;
