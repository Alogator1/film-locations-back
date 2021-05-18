import { Film } from './../../entities/film.entity';
import { FilmController } from './film.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilmService } from './film.service';

@Module({
  controllers: [FilmController],
  imports: [TypeOrmModule.forFeature([Film])],
  providers: [FilmService],
})
export class FilmModule {}
