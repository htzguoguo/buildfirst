/**
 * Created by Administrator on 2017/6/2.
 */

var ModelView = require( '../../../utils/modelview' ),
    fs = require( 'fs' ),
    template = fs.readFileSync( __dirname + '/templates/contactabout.html', 'utf8'),
    ContactAbout;

ContactAbout = module.exports = ModelView.extend( {
    template : template,
    className : 'panel panel-simple',
    events : {
        'click #back' : 'goToList',
        'click #delete' : 'deleteContact'
    },
    goToList : function () {
        window.app.router.navigate('contacts', true);
    },
    deleteContact : function () {
        this.trigger( 'contact:delete', this.model );
    }
} );
