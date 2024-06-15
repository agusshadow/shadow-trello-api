import userRouter from './userRouter.js'

const routerApi = (app) => {
    app.use('/users', userRouter);
}

export default routerApi;