import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { GetParams, CreateParams } from './user.validators';
import { User } from '../../entities/user.entity';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getUsers(@Body() options: GetParams): Promise<User[]> {
    return await this.userService.findAll(options);
  }

  @Get(':id')
  async getSingleUser(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return await this.userService.findOne(id);
  }

  @Post()
  async saveUsers(
    @Body() options: CreateParams | CreateParams[],
  ): Promise<User | User[]> {
    return await this.userService.saveUsers(options);
  }
}
