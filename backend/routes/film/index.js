module.exports = (router) => {
    router.post('/films' , require('./create').post);
    router.get('/films' , require('./find').get);
    router.delete('/films/:id' , require('./delete').delete);
    router.get('/films/search/:path' , require('./search').get);
    router.post('/films/upload' , require('./upload').post);
}