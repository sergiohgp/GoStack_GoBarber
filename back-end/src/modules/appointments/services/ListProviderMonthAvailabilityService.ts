import { inject, injectable } from 'tsyringe';

import User from '@modules/users/infra/typeorm/entities/User';
import IAppointmentsRepository from '../repositories/IAppointmentsRepository';
import AppointmentsRepository from '../infra/typeorm/repositories/AppointmentsRepository';


interface IRequest {
  provider_id: string;
  month: number;
  year: number;
}

type Ireponse = Array<{
  day: number;
  available: boolean;
}>

@injectable()
class ListProviderMonthAvailabilityService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository
  ) { }

  public async execute({ provider_id, year, month }: IRequest): Promise<Ireponse> {
    const appointments = await this.appointmentsRepository.findAllInMonthFromProvider({
      provider_id,
      year,
      month
    });

    return [
      { day: 1, available: false }
    ]
  }

}

export default ListProviderMonthAvailabilityService;
