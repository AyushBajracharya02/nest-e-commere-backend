import { Type } from 'class-transformer';
import { IsEmail, IsInt, IsOptional, IsString } from 'class-validator';

export class QueryUserDTO {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  id?: number;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsEmail()
  email?: string;
}
