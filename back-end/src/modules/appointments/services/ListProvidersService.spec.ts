import FakeUserRepository from '@modules/users/repositories/fakes/FakeUserRepository';
import ListProvidersService from './ListProvidersService';
import AppError from '@shared/errors/AppError';

let fakeUserRepository: FakeUserRepository;
let listProviders: ListProvidersService;

describe('ListProviders', () => {
  beforeEach(() => {
    fakeUserRepository = new FakeUserRepository();

    listProviders = new ListProvidersService(
      fakeUserRepository,
    );

  })

  it('should be able to show the providers', async () => {
    const user1 = await fakeUserRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '1234'
    });

    const user2 = await fakeUserRepository.create({
      name: 'John Tre',
      email: 'johntre@example.com',
      password: '1234'
    });

    const loggedUser = await fakeUserRepository.create({
      name: 'John DoeTre',
      email: 'johndoetre@example.com',
      password: '1234'
    });

    const providers = await listProviders.execute({
      user_id: loggedUser.id
    });

    expect(providers).toEqual([user1, user2]);
  });
});
