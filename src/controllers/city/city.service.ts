import { City } from './../../entities/city.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateParams, GetParams } from './city.validators';

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(City)
    private cityRepository: Repository<City>,
  ) {}

  async findAll(options: GetParams): Promise<City[]> {
    return await this.cityRepository.find({
      ...options,
      relations: ['country'],
    });
  }

  async findOne(id: number): Promise<City> {
    return await this.cityRepository.findOne(id, { relations: ['country'] });
  }

  async saveCity(
    options: CreateParams | CreateParams[],
  ): Promise<City | City[]> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return await this.cityRepository.save(options, { relations: ['country'] });
  }
}
