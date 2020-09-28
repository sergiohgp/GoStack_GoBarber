import FakeUserRepository from '../repositories/fakes/FakeUserRepository';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import CreateUserService from './CreateUserService';
import AppError from '@shared/errors/AppError';

describe('CreatUser', () => {
  it('should be able to create a new user', async () => {
    const fakeUserRepository = new FakeUserRepository();

    const fakeHashProvider = new FakeHashProvider();

    const createUser = new CreateUserService(
      fakeUserRepository,
      fakeHashProvider
    );

    const user = await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '1234'
    });

    expect(user).toHaveProperty('id');
  });

  it('should not allow two users with the same email', async () => {
    const fakeUserRepository = new FakeUserRepository();

    const fakeHashProvider = new FakeHashProvider();


    const createUser = new CreateUserService(
      fakeUserRepository,
      fakeHashProvider
    );

    const userEmail = 'johndoe@example.com';

    await createUser.execute({
      name: 'John Doe',
      email: userEmail,
      password: '1234'
    });

    expect(createUser.execute({
      name: 'John Doe',
      email: userEmail,
      password: '1234'
    }))
      .rejects
      .toBeInstanceOf(AppError);
  });

});
