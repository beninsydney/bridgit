import { Controller, Get, Post, Param, Delete } from '@nestjs/common';
import { Guid } from 'guid-typescript';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create() {
    return this.usersService.create();
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: Guid) {
    return this.usersService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: Guid) {
    return this.usersService.remove(id);
  }
}
