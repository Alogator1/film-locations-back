import { Genre } from './../../entities/genre.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateParams, GetParams } from './genre.validators';

@Injectable()
export class GenreService {
  constructor(
    @InjectRepository(Genre)
    private genreRepository: Repository<Genre>,
  ) {}

  async findAll(options: GetParams): Promise<Genre[]> {
    return await this.genreRepository.find({ ...options });
  }

  async findOne(id: number): Promise<Genre> {
    return await this.genreRepository.findOne(id);
  }

  async saveGenre(
    options: CreateParams | CreateParams[],
  ): Promise<Genre | Genre[]> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return await this.genreRepository.save(options);
  }
}
