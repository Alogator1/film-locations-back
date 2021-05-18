import { Location } from './../../entities/location.entity';
import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { GetParams, CreateParams } from './location.validators';
import { LocationService } from './location.service';

@Controller('location')
export class LocationController {
  constructor(private locationService: LocationService) {}

  @Get()
  async getLocations(@Body() options: GetParams): Promise<Location[]> {
    return await this.locationService.findAll(options);
  }

  @Get('name/:name')
  async getLocationByName(@Param('name') name: string): Promise<Location[]> {
    return await this.locationService.findAllByName({ name: name });
  }

  @Get(':id')
  async getLocationById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Location> {
    return await this.locationService.findOne(id);
  }

  @Get('user/:userId')
  async getLocationByUser(
    @Param('userId', ParseIntPipe) userId: number,
  ): Promise<Location[]> {
    return await this.locationService.findAll({ user: userId });
  }

  @Get('film/:filmId')
  async getLocationsByFilm(
    @Param('filmId', ParseIntPipe) filmId: number,
  ): Promise<Location[]> {
    return await this.locationService.findAll({ film: filmId });
  }

  @Post()
  async saveLocation(
    @Body() options: CreateParams | CreateParams[],
  ): Promise<Location | Location[]> {
    return await this.locationService.saveLocation(options);
  }
}
