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
  location?: number;
}

export class CreateParams {
  @IsOptional()
  @IsNumber()
  id?: number;

  @IsOptional()
  @IsString()
  locationId: number;

  @IsOptional()
  @IsString()
  text: string;

  @IsOptional()
  @IsString()
  date: string;

  @IsOptional()
  @IsString()
  userId: number;
}
