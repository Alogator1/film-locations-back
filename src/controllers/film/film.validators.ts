import { IsString, IsOptional, IsNumber } from 'class-validator';

export class GetParams {
  @IsOptional()
  @IsNumber()
  id?: number;

  @IsOptional()
  @IsString()
  name: string;
}

export class CreateParams {
  @IsOptional()
  @IsNumber()
  id?: number;

  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  director: string;

  @IsOptional()
  @IsString()
  actors: string;

  @IsOptional()
  @IsString()
  genreId: number;
}
