import {
  IsString,
  IsOptional,
  IsObject,
  IsBoolean,
  IsNumber,
  IsDateString,
  ValidateNested,
  IsUUID,
} from 'class-validator';
import { Type } from 'class-transformer';

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
}
