import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateParams, GetParams } from './role.validators';
import { Role } from '../../entities/role.entity';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role)
    private roleRepository: Repository<Role>,
  ) {}

  async findAll(options: GetParams): Promise<Role[]> {
    return await this.roleRepository.find(options);
  }

  async findOne(id: number): Promise<Role> {
    return await this.roleRepository.findOne(id);
  }

  async saveRole(
    options: CreateParams | CreateParams[],
  ): Promise<Role | Role[]> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return await this.roleRepository.save(options);
  }
}
