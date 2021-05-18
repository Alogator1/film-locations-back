import { IsString, IsOptional, IsNumber } from 'class-validator';

export class GetParams {
  @IsOptional()
  @IsNumber()
  id?: number;

  @IsOptional()
  @IsString()
  user?: number;

  @IsOptional()
  @IsString()
  film?: number;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  city?: number;
}

export class CreateParams {
  @IsOptional()
  @IsNumber()
  id?: number;

  @IsOptional()
  @IsString()
  userId: number;

  @IsOptional()
  @IsString()
  cityId: number;

  @IsOptional()
  @IsString()
  filmId: number;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  latitude: number;

  @IsOptional()
  @IsString()
  longitude: number;
}
