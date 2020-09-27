import FakeAppointmentRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';

describe('CreatAppointment', () => {
  it('should be able to create a new appointment', async () => {
    const fakeAppointmentRepository = new FakeAppointmentRepository();

    const createAppointment = new CreateAppointmentService(
      fakeAppointmentRepository
    );

    const appointment = await createAppointment.execute({
      date: new Date(),
      provider_id: '123131131231',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('123131131231');
  });

  // it('should be able to create two appointments at the same time', () => {
  //   expect(1+2).toBe(3);
  // });
});
