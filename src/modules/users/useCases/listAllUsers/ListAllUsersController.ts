import { Request, Response } from 'express';

import { ListAllUsersUseCase } from './ListAllUsersUseCase';
import { IncomingHttpHeaders } from 'node:http';
interface IRequestHeader extends IncomingHttpHeaders {
  user_id: any;
}
class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.headers as IRequestHeader;
      const users = this.listAllUsersUseCase.execute({ user_id });
      return response.json(users);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { ListAllUsersController };
