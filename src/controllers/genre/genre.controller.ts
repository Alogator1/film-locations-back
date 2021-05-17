import { Genre } from './../../entities/genre.entity';
import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { GetParams, CreateParams } from './genre.validators';
import { GenreService } from './genre.service';

@Controller('genre')
export class GenreController {
  constructor(private genreService: GenreService) {}

  @Get()
  async getGenres(@Body() options: GetParams): Promise<Genre[]> {
    return await this.genreService.findAll(options);
  }

  @Get(':id')
  async getSingleGenre(@Param('id', ParseIntPipe) id: number): Promise<Genre> {
    return await this.genreService.findOne(id);
  }

  @Post()
  async saveGenre(
    @Body() options: CreateParams | CreateParams[],
  ): Promise<Genre | Genre[]> {
    return await this.genreService.saveGenre(options);
  }
}
