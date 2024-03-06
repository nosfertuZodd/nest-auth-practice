import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';

@Injectable()
export class UserService {
  private readonly users: User[] = [
    {
      id: '12391488123',
      name: 'string1',
      email: 'string2',
      password: 'string3',
    },
    {
      id: '656669',
      name: 'second_string',
      email: 'third_string',
      password: 'fourth_string',
    }
  ];

  findAll():User[]{
    return this.users
  }
  findOne(id:string) :User{
    return this.users.find(user => user.id === id);
  }

}