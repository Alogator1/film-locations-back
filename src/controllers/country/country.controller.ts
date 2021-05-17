import { Country } from '../../entities/country.entity';
import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { GetParams, CreateParams } from './country.validators';
import { CountryService } from './country.service';

@Controller('country')
export class CountryController {
  constructor(private countryService: CountryService) {}

  @Get()
  async getCountries(@Body() options: GetParams): Promise<Country[]> {
    return await this.countryService.findAll(options);
  }

  @Get(':id')
  async getSingleCountry(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Country> {
    return await this.countryService.findOne(id);
  }

  @Post()
  async saveCountry(
    @Body() options: CreateParams | CreateParams[],
  ): Promise<Country | Country[]> {
    return await this.countryService.saveCountry(options);
  }
}
