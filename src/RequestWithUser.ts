
import { Injectable, NestMiddleware } from '@nestjs/common'
import { NextFunction } from 'express'
import { Guid } from 'guid-typescript'
import { User } from './users/user.entity'
import { Application } from './applications/application.entity'
import { UsersService } from './users/users.service'
import { ApplicationsService } from './applications/applications.service'

@Injectable()
export class RequestWithUser implements NestMiddleware {
  private readonly usersService: UsersService
  private readonly applicationsService: ApplicationsService
  constructor () {
    this.usersService = new UsersService(User)
    this.applicationsService = new ApplicationsService(Application)
  }

  async use (req: Record<string, any>, _, next: NextFunction): Promise<void> {
    const userid: string = req.headers.userid as string
    let user: User | null | undefined
    if (userid !== null && userid !== undefined && userid !== '') {
      try {
        user = await this.usersService.findOne(Guid.parse(userid))
      } catch (error) {
        throw new Error('invalid-user')
      }
    } else {
      user = await this.usersService.create()
    }
    let application: Application | null | undefined
    const applications = await this.applicationsService.findAll(user.id)
    if (applications.length === 0) {
      application = await Application.create({
        userid: user.id
      })
    } else {
      application = applications[0]
    }
    req.user = user
    req.application = application
    return next()
  }
}
