import { Injectable, Inject, Scope, Controller, Get, Param } from '@nestjs/common'
import { User } from './user.entity'
import { REQUEST } from '@nestjs/core'

@Controller('users')
@Injectable({ scope: Scope.REQUEST })
export class UsersController {
  constructor (
    @Inject(REQUEST) private readonly request: Record<string, any>,
  ) {}

  @Get()
  async findOne (): Promise<User> {
    const { user } = this.request
    return user
  }
}
