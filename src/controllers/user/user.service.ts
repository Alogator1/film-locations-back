import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../entities/user.entity';
import { CreateParams, GetParams } from './user.validators';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAll(options: GetParams): Promise<User[]> {
    return await this.userRepository.find({ ...options, relations: ['role'] });
  }

  async findOne(id: number): Promise<User> {
    return await this.userRepository.findOne(id, { relations: ['role'] });
  }

  async saveUsers(
    options: CreateParams | CreateParams[],
  ): Promise<User | User[]> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return await this.userRepository.save(options);
  }

  async getCurrentUser(options: {
    login: string;
    password: string;
  }): Promise<User | User[]> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return await this.userRepository.findOne(options, { relations: ['role'] });
  }
}
