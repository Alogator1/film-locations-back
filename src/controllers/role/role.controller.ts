import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { GetParams, CreateParams } from './role.validators';
import { RoleService } from './role.service';
import { Role } from '../../entities/role.entity';

@Controller('roles')
export class RoleController {
  constructor(private roleService: RoleService) {}

  @Get()
  async getRoles(@Body() options: GetParams): Promise<Role[]> {
    return await this.roleService.findAll(options);
  }

  @Get(':id')
  async getSingleUser(@Param('id', ParseIntPipe) id: number): Promise<Role> {
    return await this.roleService.findOne(id);
  }

  @Post()
  async saveRole(
    @Body() options: CreateParams | CreateParams[],
  ): Promise<Role | Role[]> {
    return await this.roleService.saveRole(options);
  }
}
