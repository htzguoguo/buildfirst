/**
 * Created by Administrator on 2016/12/6.
 */

function stamp( date ) {
    return date.valueOf();
}

var article = {
    title : 'Some Piece of Text',
    date : new Date()
};

var keywords = /\bsome|the|by|for|of\b/ig;
function filter( text ) {
    return text.replace( keywords, '' );
}

function getSlug( text ) {
    var separator = /[^a-z0-9]+/ig;
    var drop = /^-|-$/g;
    return text
        .replace(separator, '-')
        .replace(drop, '')
        .toLowerCase();
}
var filtered = filter( article.title );
var slug = getSlug( filtered );
var time = stamp( article.date );
var url = '/' + time + '/' + slug;

console.log( url );

