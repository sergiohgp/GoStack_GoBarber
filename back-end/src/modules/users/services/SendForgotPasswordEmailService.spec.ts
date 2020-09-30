import FakeUserRepository from '../repositories/fakes/FakeUserRepository';
import FakeMailProvider from '@shared/container/providers/MailProvider/fakes/FakeMailProvider';
import SendForgotPasswordEmailSerice from './SendForgotPasswordEmailService';
// import AppError from '@shared/errors/AppError';

describe('SendForgotPassworEmail', () => {
  it('should be able to reset password using email', async () => {
    const fakeUserRepository = new FakeUserRepository();
    const fakeMailProvider = new FakeMailProvider;

    const sendMail = jest.spyOn(fakeMailProvider, 'sendMail');

    const sendForgotPasswordEmail = new SendForgotPasswordEmailSerice(
      fakeUserRepository,
      fakeMailProvider
    );

    await fakeUserRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '1234'
    });

    await sendForgotPasswordEmail.execute({
      email: 'johndoe@example.com',
    });

    expect(sendMail).toHaveBeenCalled();
  });
});
