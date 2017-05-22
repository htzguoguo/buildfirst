/**
 * Created by Administrator on 2016/12/8.
 */
var _ = require('lodash');
var things = {
    a : 1,
    b : 2,
    c : 3,
    d : 4
};

var result = _.toArray( things );
console.log( result );
