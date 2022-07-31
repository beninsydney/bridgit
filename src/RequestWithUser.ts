
import { Injectable, NestMiddleware } from '@nestjs/common'
import { NextFunction } from 'express'
import { Guid } from 'guid-typescript'
import { User } from './users/user.entity'
import { Application } from './applications/application.entity'

@Injectable()
export class RequestWithUser implements NestMiddleware {
  async use (req: Record<string, any>, _, next: NextFunction): Promise<void> {
    const userid: string = req.headers.userid as string
    let user: User | null | undefined
    if (userid !== null && userid !== '') {
      user = await User.findOne({
        where: {
          id: Guid.parse(userid)
        }
      })
      if (user === null || user === undefined) {
        throw new Error('invalid-user')
      }
    } else {
      user = await User.create()
    }
    let application: Application | null | undefined = await Application.findOne({
      where: {
        userid: user.id.toString()
      }
    })
    if (application === null || application === undefined) {
      application = await Application.create({
        userid: user.id
      })
    }
    req.user = user
    req.application = application
    return next()
  }
}
