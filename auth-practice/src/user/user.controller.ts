/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { createUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { User } from './interfaces/user.interface';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id): Promise<User> {
    return this.userService.findOne(id);
  }

  @Post()
  create(@Body() createUserDto: createUserDto): Promise<User> {
    return this.userService.create(createUserDto);
  }

  @Put(':id')
  update(@Body() updateUserDto: createUserDto, @Param('id') id): Promise<User> {
    return this.update(id, updateUserDto);
  }

  @Delete(':id')
  delete(@Param('id') id): Promise<User> {
    return this.userService.delete(id);
  }
}
