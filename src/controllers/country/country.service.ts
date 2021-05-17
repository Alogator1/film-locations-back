import { Country } from './../../entities/country.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateParams, GetParams } from './country.validators';

@Injectable()
export class CountryService {
  constructor(
    @InjectRepository(Country)
    private countryRepository: Repository<Country>,
  ) {}

  async findAll(options: GetParams): Promise<Country[]> {
    return await this.countryRepository.find({ ...options });
  }

  async findOne(id: number): Promise<Country> {
    return await this.countryRepository.findOne(id);
  }

  async saveCountry(
    options: CreateParams | CreateParams[],
  ): Promise<Country | Country[]> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return await this.countryRepository.save(options);
  }
}
