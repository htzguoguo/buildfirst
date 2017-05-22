/**
 * Created by Administrator on 2017/4/17.
 */

module.exports.authorize = function ( req, res, next ) {
    "use strict";
    var result;
    if ( req.session.login ) {
        next()
    }else {
        result = {
            "error": {
                "code": "bf-401",
                "message": "Not Authorized",
                "context": {
                    "url": req.url
                }
            }
        };
        res.status(401).send( result );
    }
};

module.exports.login = function ( req, res, next ) {
    "use strict";
    var result;
    var user = req.body;
    res.setHeader( 'Content-Type', 'application/json' );
    if ( user.name === 'admin' && user.pw === '123' ) {
        req.session.login = user;
        res.status(200);
        result = {
            data : {
                status : 'success',
                desc : '0'
            }
        };
        res.send( result );
    }else {
        res.status(404);
        result = {
            "error": {
                "code": "bf-404",
                "message": "用户名或者密码错误",
                "context": {
                   name : user.name
                }
            }
        };
        res.send(  result );
    }
};

module.exports.logout = function ( req, res, next ) {
    "use strict";
    if ( req.session.login ) {
        req.session.destroy();
    }

    res.status(200).send( {
        data : {
            status : 'success',
            desc : '1'
        }
    }  );
};
