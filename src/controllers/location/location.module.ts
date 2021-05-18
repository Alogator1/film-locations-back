import { LocationService } from './location.service';
import { Location } from './../../entities/location.entity';
import { LocationController } from './location.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [LocationController],
  imports: [TypeOrmModule.forFeature([Location])],
  providers: [LocationService],
})
export class LocationModule {}
