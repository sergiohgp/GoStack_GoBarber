import { Router } from 'express';
import { container } from 'tsyringe';
import { parseISO } from 'date-fns';

import CreateAppointmentService from '@modules/appointments/services/CreateAppointmentService';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const appointementsRouter = Router();

appointementsRouter.use(ensureAuthenticated);

// appointementsRouter.get('/', async (request, response) => {
//   const appointmentsRepository = getCustomRepository(AppointmentsRepository);
//   const appointments = await appointmentsRepository.find();

//   return response.json(appointments);
// });

appointementsRouter.post('/', async (request, response) => {

  const { provider_id, date } = request.body;

  const parsedDate = parseISO(date);


  const createAppointment = container.resolve(CreateAppointmentService);

  const appointment = await createAppointment.execute({ date: parsedDate, provider_id });

  return response.json(appointment);
})

export default appointementsRouter;
