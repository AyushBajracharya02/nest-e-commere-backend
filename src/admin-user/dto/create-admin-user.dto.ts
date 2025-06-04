import { IsEmail, IsString } from 'class-validator';

export class CreateAdminUserDTO {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
