import { Genre } from './../../entities/genre.entity';
import { GenreService } from './genre.service';
import { GenreController } from './genre.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [GenreController],
  imports: [TypeOrmModule.forFeature([Genre])],
  providers: [GenreService],
})
export class GenreModule {}
