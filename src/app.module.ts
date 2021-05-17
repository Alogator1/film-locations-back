import { CityModule } from './controllers/city/city.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleModule } from './controllers/role/role.module';
import { UserModule } from './controllers/user/user.module';
import { CountryModule } from './controllers/country/country.module';
import { GenreModule } from './controllers/genre/genre.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UserModule,
    RoleModule,
    CountryModule,
    CityModule,
    GenreModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
