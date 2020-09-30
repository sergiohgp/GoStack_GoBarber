import { inject, injectable } from 'tsyringe';

// import User from '@modules/users/infra/typeorm/entities/User';
// import AppError from '@shared/errors/AppError';
import IUsersRepository from '../repositories/IUsersRepository';
import IMailProvider from '@shared/container/providers/MailProvider/models/IMailProvider';

interface IRequest {
  email: string
}

@injectable()
class SendForgotPasswordEmailSerice {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('MailProvider')
    private mailProvider: IMailProvider
  ) { }

  public async execute({ email }: IRequest): Promise<void> {
    this.mailProvider.sendMail(email, 'Reset password');
  }
}

export default SendForgotPasswordEmailSerice;
