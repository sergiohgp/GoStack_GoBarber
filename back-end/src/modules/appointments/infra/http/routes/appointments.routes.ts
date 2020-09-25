import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import AppointmentsController from '../controllers/AppointmentsController';

const appointementsRouter = Router();
const appointmentsController = new AppointmentsController();

appointementsRouter.use(ensureAuthenticated);

// appointementsRouter.get('/', async (request, response) => {
//   const appointments = container.resolve();

//   return response.json(appointments);
// });

appointementsRouter.post('/', appointmentsController.create)

export default appointementsRouter;
