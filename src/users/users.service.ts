import { Injectable, Inject } from '@nestjs/common';
import { User } from './user.entity';
import { Guid } from 'guid-typescript';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private model: typeof User
  ) {}

  async create(): Promise<User> {
    const object = new User()
    return object.save()
  }

  async findAll(): Promise<User[]> {
    return this.model.findAll<User>()
  }

  async findOne(id: Guid): Promise<User> {
    return this.model.findOne<User>({
      where: {
        id
      }
    })
  }

  async remove(id: Guid): Promise<void> {
    await this.model.destroy({
      where: {
        id
      }
    })
  }
}