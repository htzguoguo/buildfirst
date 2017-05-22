/**
 * Created by Administrator on 2017/4/7.
 */


var proxyquire = require( 'proxyquireify' )( require ),
    test = require( 'tape' ),
    sinon = require( 'sinon' ),
    ListView, AddItemView;

function getStubbedRouter() {
    "use strict";
    ListView = sinon.spy();
    AddItemView = sinon.spy();
    var viewRouter = proxyquire( '../app/routers/viewRouter.js', {
        '../views/list.js' : ListView,
        '../views/addItem.js': AddItemView
    } );
    return viewRouter;
}

function getRouteHandler( router, route ) {
    "use strict";
    var routes = Object.keys(router.routes),
        len = routes.length,
        i, routeHandler;
    for ( i = 0; i < len; i ++ ) {
        if ( route === routes[ i ] ) {
            routeHandler = router.routes[ route ]
            return router[ routeHandler ].bind( router );
        }
    }
}

test( 'there are three routes and router handles', function ( t ) {
    "use strict";
    var viewRouter = getStubbedRouter();
    var router = new viewRouter();
    var routes = Object.keys( router.routes );
    t.equal( routes.length, 3 );
    routes.forEach( exists );
    t.end();

    function exists( route ) {
        var handlerName = router.routes[ route ];
        var handler = router[ handlerName ];
        t.ok( handler, 'route handler for ' + route + ' exist' );
    }
} );

test( 'route # redirect to #items route' , function ( t ) {
    "use strict";
    var ViewRouter = getStubbedRouter(),
        router = new ViewRouter(),
        handler = getRouteHandler( router, '' );
    router.navigate = sinon.spy();
    handler();

    t.ok( router.navigate.calledOnce, 'called router.navigate' );
    t.ok( router.navigate.calledWith( 'items', { trigger : true } ), 
        'called router.navigate with proper arguments' );
    t.end();
} );

test( 'route #items renders ListView', function ( t ) {
    "use strict";
    var ViewRouter = getStubbedRouter(),
        router = new ViewRouter(),
        handler = getRouteHandler( router, 'items' );
    handler();
    t.ok( ListView.calledOnce, 'called ListView once' );
    t.ok( ListView.calledWithNew, 'called new ListView' );
    t.end();
} );

test( 'route #items/add renders AddItemView', function ( t ) {
    "use strict";
    var ViewRouter = getStubbedRouter(),
        router = new ViewRouter(),
        handler = getRouteHandler( router, 'items/add' );
    handler();
    t.ok( AddItemView.calledOnce, 'called AddItemView once.' );
    t.ok( AddItemView.calledWithNew, 'called new AddItemView' );
    t.end();
} );