import { Injectable, Inject } from '@nestjs/common'
import { User } from './user.entity'
import { Guid } from 'guid-typescript'

@Injectable()
export class UsersService {
  constructor (
    @Inject('USERS_REPOSITORY')
    private readonly model: typeof User
  ) {}

  async create (): Promise<User> {
    const object = new User()
    return await object.save()
  }

  async findAll (): Promise<User[]> {
    return await this.model.findAll<User>()
  }

  async findOne (id: Guid): Promise<User> {
    const object = await this.model.findOne<User>({
      where: {
        id: id.toString()
      }
    })
    if (object == null) {
      throw new Error('invalid-id')
    }
    return object
  }

  async remove (id: Guid): Promise<void> {
    const affected = await this.model.destroy({
      where: {
        id
      }
    })
    if (affected === 0) {
      throw new Error('invalid-id')
    }
  }
}
