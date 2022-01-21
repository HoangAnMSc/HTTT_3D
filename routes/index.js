const HomeRouter= require('./web.js');
function route(app){

        app.use('/',HomeRouter);
        app.use('/store',HomeRouter);
        app.use('/login',HomeRouter);
        app.use('/dataphongtoa',HomeRouter);
        app.use('/phongtoa',HomeRouter);
        app.use('/tinhtoan',HomeRouter);
}
module.exports =route;