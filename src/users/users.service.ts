import { Injectable } from '@nestjs/common';

import { UserDTO } from './users.dto';

@Injectable()
export class UsersService {
  private readonly users: UserDTO[] = [
    {
      username: 'john',
      password: 'changeme',
    },
    {
      username: 'maria',
      password: 'guess',
    },
  ];

  async findOne(username: string): Promise<UserDTO | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
