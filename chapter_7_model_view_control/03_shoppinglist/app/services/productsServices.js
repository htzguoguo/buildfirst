/**
 * Created by Administrator on 2017/3/29.
 */

var Products = require( '../collection/products' ),
    items  = [
        { name : 'apple', quantity : 1 },
        { name : 'orange', quantity : 10 },
        { name : 'berry', quantity : 22}
    ];

module.exports = {
    collection : new Products( items )
}
