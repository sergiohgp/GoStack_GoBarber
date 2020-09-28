import IHashPRovider from '../models/IHashProvider';

export default class FakeHashProvider implements IHashPRovider {
  public async generateHash(payload: string): Promise<string> {
    return payload;
  }

  public async compareHash(payload: string, hashed: string): Promise<boolean> {
    return payload === hashed;
  }
}
