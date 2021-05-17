import { Country } from './../../entities/country.entity';
import { CountryService } from './country.service';
import { CountryController } from './country.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [CountryController],
  imports: [TypeOrmModule.forFeature([Country])],
  providers: [CountryService],
})
export class CountryModule {}
