import { Film } from './../../entities/film.entity';
import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { GetParams, CreateParams } from './film.validators';
import { FilmService } from './film.service';

@Controller('film')
export class FilmController {
  constructor(private filmService: FilmService) {}

  @Get()
  async getFilms(@Body() options: GetParams): Promise<Film[]> {
    return await this.filmService.findAll(options);
  }

  @Get(':id')
  async getSingleFilm(@Param('id', ParseIntPipe) id: number): Promise<Film> {
    return await this.filmService.findOne(id);
  }

  @Get('/name/:name')
  async getSingleFilmsByName(@Param('name') name: string): Promise<Film[]> {
    return await this.filmService.findAllByName({ name: name });
  }

  @Post()
  async saveFilm(
    @Body() options: CreateParams | CreateParams[],
  ): Promise<Film | Film[]> {
    return await this.filmService.saveFilm(options);
  }
}
