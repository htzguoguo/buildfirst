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
        firstname : String,
        lastname : String,
        title : String,
        company : String,
        jobtitle : String,
        othercontactnumbers : [ String ],
        primaryemailaddress: String,
        emailaddresses: [String],
        groups: [String],
        facebook: String,
        twitter: String,
        github: String,
        google: String
    } ),
    Contact = mongoose.model( 'Contact', contactSchema );

module.exports = Contact;
