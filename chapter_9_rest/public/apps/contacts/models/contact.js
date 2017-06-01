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
            firstname : 'John Doe',
            lastname : 556677
        }
    }
);