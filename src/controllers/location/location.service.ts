import { Location } from './../../entities/location.entity';
import { Injectable } from '@nestjs/common';
import { Like, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateParams, GetParams } from './location.validators';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(Location)
    private locationRepository: Repository<Location>,
  ) {}

  async findAll(options: GetParams): Promise<Location[]> {
    return await this.locationRepository.find({
      where: options,
      relations: ['city', 'user', 'city.country', 'film'],
    });
  }

  async findAllByName(options: GetParams): Promise<Location[]> {
    return await this.locationRepository.find({
      where: { ...options, name: Like(`%${options?.name}%`) },
      relations: ['city', 'user', 'city.country', 'film'],
    });
  }

  async findOne(id: number): Promise<Location> {
    return await this.locationRepository.findOne(id, {
      relations: ['user', 'city', 'city.country', 'film'],
    });
  }

  async saveLocation(
    options: CreateParams | CreateParams[],
  ): Promise<Location | Location[]> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line prettier/prettier
    return await this.locationRepository.save(options, { relations: ['user', 'city'],});
  }
}
