import FakeUserRepository from '../repositories/fakes/FakeUserRepository';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import CreateUserService from './CreateUserService';
import AppError from '@shared/errors/AppError';

let fakeUserRepository: FakeUserRepository;
let fakeHashProvider: FakeHashProvider;
let createUser: CreateUserService;

describe('CreatUser', () => {
  beforeEach(() => {
    fakeUserRepository = new FakeUserRepository();

    fakeHashProvider = new FakeHashProvider();

    createUser = new CreateUserService(
      fakeUserRepository,
      fakeHashProvider
    );

  });

  it('should be able to create a new user', async () => {
    const user = await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '1234'
    });

    expect(user).toHaveProperty('id');
  });

  it('should not allow two users with the same email', async () => {
    const userEmail = 'johndoe@example.com';

    await createUser.execute({
      name: 'John Doe',
      email: userEmail,
      password: '1234'
    });

    await expect(createUser.execute({
      name: 'John Doe',
      email: userEmail,
      password: '1234'
    }))
      .rejects
      .toBeInstanceOf(AppError);
  });

});
