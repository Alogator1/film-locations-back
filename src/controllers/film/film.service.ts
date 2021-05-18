import { Film } from './../../entities/film.entity';
import { Injectable } from '@nestjs/common';
import { Like, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateParams, GetParams } from './film.validators';

@Injectable()
export class FilmService {
  constructor(
    @InjectRepository(Film)
    private filmRepository: Repository<Film>,
  ) {}

  async findAll(options: GetParams): Promise<Film[]> {
    return await this.filmRepository.find({
      where: options,
      relations: ['genre'],
    });
  }

  async findAllByName(options: GetParams): Promise<Film[]> {
    return await this.filmRepository.find({
      where: { ...options, name: Like(`%${options?.name}%`) },
      relations: ['genre'],
    });
  }

  async findOne(id: number): Promise<Film> {
    return await this.filmRepository.findOne(id, { relations: ['genre'] });
  }

  async saveFilm(
    options: CreateParams | CreateParams[],
  ): Promise<Film | Film[]> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return await this.filmRepository.save(options, { relations: ['genre'] });
  }
}
