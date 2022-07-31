import { Injectable, Inject, Scope, Controller, Body, Patch, Param, Delete } from '@nestjs/common'
import { ApplicationsService } from './applications.service'
import { UpdateApplicationDto } from './dto/update-application.dto'
import { Guid } from 'guid-typescript'
import { REQUEST } from '@nestjs/core'
import { Application } from './application.entity'

@Controller('applications')
@Injectable({ scope: Scope.REQUEST })
export class ApplicationsController {
  constructor (
    @Inject(REQUEST) private readonly request: Record<string, any>,
    private readonly applicationsService: ApplicationsService
  ) {}

  @Patch(':id')
  async update (@Param('id') id: Guid, @Body() updateApplicationDto: UpdateApplicationDto): Promise<Application> {
    const { user } = this.request
    return await this.applicationsService.update(user.id, id, updateApplicationDto)
  }

  @Delete(':id')
  async remove (@Param('id') id: Guid): Promise<void> {
    const { user } = this.request
    return await this.applicationsService.remove(user.id, id)
  }
}
