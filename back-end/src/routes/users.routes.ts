import { request, response, Router } from 'express'
import multer from 'multer'

// import AppointmentsRepository from '../repositories/AppointmentsRepository'
import CreateUserService from '../services/CreateUserService'
import ensureAuthenticated from '../middlewares/ensureAuthenticated'
import uploadConfig from '../config/upload'
import UpdatedUserAvatarService from '../services/UpdateUserAvatarService'

const usersRouter = Router()
const upload = multer(uploadConfig)


usersRouter.post('/', async (request, response) => {

    const { name, email, password } = request.body

    const createUser = new CreateUserService()

    const user = await createUser.execute({
        name,
        email,
        password
    })

    delete user.password

    return response.json(user)
})

usersRouter.patch('/avatar', ensureAuthenticated, upload.single('avatar'), async (request, response) => {

    const updateUseravatar = new UpdatedUserAvatarService()

    const user = await updateUseravatar.execute({
        user_id: request.user.id,
        avatarFilename: request.file.filename,
    })

    delete user.password

    return response.json(user)
})

export default usersRouter
