/**
 * Created by Administrator on 2017/5/21.
 */

var Backbone = require( 'backbone' ),
    Contact;

Contact = module.exports = Backbone.Model.extend(
    {
        urlRoot : 'api/v1/contacts',
        idAttribute: 'primarycontactnumber',
        defaults : {
            name: '',
            phone: '',
            email: '',
            address: '',
            facebook: '',
            twitter: '',
            google: '',
            github: ''
        },
        toJSON : function () {
            var result = Backbone.Model.prototype.toJSON.call( this );
            if ( result.phones && result.phones.length > 0 ) {
                result.phone = result.phones[ 0 ].phone;
            }
            if ( result.emails && result.emails.length > 0 ) {
                result.email = result.emails[ 0 ].email;
            }
            return result;
        }

    }
);