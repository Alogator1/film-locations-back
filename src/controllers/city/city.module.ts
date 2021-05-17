import { CityController } from './city.controller';
import { City } from './../../entities/city.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CityService } from './city.service';

@Module({
  controllers: [CityController],
  imports: [TypeOrmModule.forFeature([City])],
  providers: [CityService],
})
export class CityModule {}
