import userRouter from './userRouter.js'
import boardRouter from './boardRouter.js'
import taskRouter from './taskRouter.js'

const routerApi = (app) => {
    app.use('/users', userRouter);
    app.use('/boards', boardRouter);
    app.use('/tasks', taskRouter);
}

export default routerApi;