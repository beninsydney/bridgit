import { Injectable, Inject, Scope, Controller, Get, Param } from '@nestjs/common'
import { User } from './user.entity'
import { UsersService } from './users.service'
import { REQUEST } from '@nestjs/core'

@Controller('users')
@Injectable({ scope: Scope.REQUEST })
export class UsersController {
  constructor (
    @Inject(REQUEST) private readonly request: Record<string, any>,
    private readonly usersService: UsersService
  ) {}

  @Get()
  async findOne (): Promise<User> {
    const { user } = this.request
    return await this.usersService.findOne(user.id)
  }
}
