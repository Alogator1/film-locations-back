import { IsString, IsOptional, IsNumber } from 'class-validator';

export class GetParams {
  @IsOptional()
  @IsNumber()
  id?: number;

  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  countryId: number;
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
  countryId: number;
}
