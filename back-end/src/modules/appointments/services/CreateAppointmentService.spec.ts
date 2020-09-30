import FakeAppointmentRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';
import AppError from '@shared/errors/AppError';

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

  it('should not allow two appointments at the same time', async () => {
    const fakeAppointmentRepository = new FakeAppointmentRepository();

    const createAppointment = new CreateAppointmentService(
      fakeAppointmentRepository
    );

    const appointmentDate = new Date(2020, 4, 10, 11);

    await createAppointment.execute({
      date: appointmentDate,
      provider_id: '123131131231',
    });

    await expect(
      createAppointment.execute({
        date: appointmentDate,
        provider_id: '123131131231',
      }))
      .rejects
      .toBeInstanceOf(AppError);
  });
});
