import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { GetParams, CreateParams } from './city.validators';
import { City } from 'src/entities/city.entity';
import { CityService } from './city.service';

@Controller('city')
export class CityController {
  constructor(private cityService: CityService) {}

  @Get()
  async getCities(@Body() options: GetParams): Promise<City[]> {
    return await this.cityService.findAll(options);
  }

  @Get(':id')
  async getSingleCity(@Param('id', ParseIntPipe) id: number): Promise<City> {
    return await this.cityService.findOne(id);
  }

  @Post()
  async saveCities(
    @Body() options: CreateParams | CreateParams[],
  ): Promise<City | City[]> {
    return await this.cityService.saveCity(options);
  }
}
