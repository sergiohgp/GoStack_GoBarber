import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ProvidersController from '../controllers/ProvidersController';

const providersRouter = Router();
const providersController = new ProvidersController();

providersRouter.use(ensureAuthenticated);

// appointementsRouter.get('/', async (request, response) => {
//   const appointments = container.resolve();

//   return response.json(appointments);
// });

providersRouter.get('/', providersController.index)

export default providersRouter;
