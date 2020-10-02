import FakeUserRepository from '../repositories/fakes/FakeUserRepository';
import AuthenticateUserService from './AuthenticateUserService';
import CreateUserService from './CreateUserService';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import AppError from '@shared/errors/AppError';

let fakeUserRepository: FakeUserRepository;
let fakeHashProvider: FakeHashProvider;
let createUser: CreateUserService;
let authenticateUser: AuthenticateUserService;

describe('AuthenticateUser', () => {
  beforeEach(() => {
    fakeUserRepository = new FakeUserRepository();

    fakeHashProvider = new FakeHashProvider();

    createUser = new CreateUserService(
      fakeUserRepository,
      fakeHashProvider
    );

    authenticateUser = new AuthenticateUserService(
      fakeUserRepository,
      fakeHashProvider
    );
  })

  it('should be able to authenticate the user', async () => {
    const user = await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '1234'
    });

    const response = await authenticateUser.execute({
      email: 'johndoe@example.com',
      password: '1234'
    });

    expect(response).toHaveProperty('token');
    expect(response.user).toEqual(user);
  });

  it('should not be able to authenticate a non existing user', async () => {
    await expect(
      authenticateUser.execute({
        email: 'johndoe@example.com',
        password: '1234'
      }))
      .rejects
      .toBeInstanceOf(AppError);
  });

  it('should be able to authenticate a user with wrong password', async () => {
    await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '1234'
    });


    await expect(
      authenticateUser.execute({
        email: 'johndoe@example.com',
        password: 'wrong-password'
      }))
      .rejects
      .toBeInstanceOf(AppError);
  });
});
