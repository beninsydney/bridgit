
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { Guid } from 'guid-typescript'
import { User  } from './users/user.entity';
import { Application } from './applications/application.entity';

@Injectable()
export class RequestWithUser implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    let user:User;
    if (req.headers['userid']) {
      const userid = Guid.parse(req.headers['userid'] as string)
      user = await User.findOne({ where: {
        id: userid
      }})
      if (!user) {
        throw new Error('invalid-user')
      }
    } else {
      user = await User.create()
    }
    let application = await Application.findOne({
      where: {
        userid: user.id.toString()
      }
    })
    if (!application) {
      application = await Application.create({
        userid: user.id
      })
    }
    req['user'] = user
    req['application'] = application
    next();
  }
}
