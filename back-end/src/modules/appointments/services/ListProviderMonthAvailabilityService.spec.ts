import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import ListProviderMonthAvailabilityService from './ListProviderMonthAvailabilityService';
import AppError from '@shared/errors/AppError';

let listProviderMonthAvailability: ListProviderMonthAvailabilityService;
let fakeAppointmentsRepository: FakeAppointmentsRepository;

describe('ListProviders', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository;

    listProviderMonthAvailability = new ListProviderMonthAvailabilityService(
      fakeAppointmentsRepository
    );

  })

  it('should be able to list the month availability', async () => {
    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      date: new Date(2020, 9, 20, 8, 0, 0)
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      date: new Date(2020, 9, 20, 10, 0, 0)
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      date: new Date(2020, 9, 21, 8, 0, 0)
    });

    const availability = listProviderMonthAvailability.execute({
      provider_id: 'user',
      year: 2020,
      month: 5
    });

    expect(availability).toEqual(expect.arrayContaining([
      { day: 19, available: true },
      { day: 20, available: false },
      { day: 21, available: false },
      { day: 22, available: true },
    ]));
  });
});
