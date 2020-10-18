import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';

export default class UsersAvatarController {
  public async update(request: Request, response: Response): Promise<Response> {
    const updateUseravatar = container.resolve(UpdateUserAvatarService);

    const user = await updateUseravatar.execute({
      user_id: request.user.id,
      avatarFilename: request.file.filename,
    });

    return response.json(classToClass(user));
  }
}
