import { Controller, Get, Post, Param, Delete } from '@nestjs/common';
import { Guid } from 'guid-typescript';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(): Promise<User> {
    return this.usersService.create();
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: Guid): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: Guid): Promise<void> {
    return this.usersService.remove(id);
  }
}
