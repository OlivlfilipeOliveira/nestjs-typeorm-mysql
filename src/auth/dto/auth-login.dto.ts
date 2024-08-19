import { IsEmail, IsString, MaxLength } from 'class-validator';

export class AuthLoginDTO {
  @IsEmail()
  email: string;

  @IsString()
  @MaxLength(6)
  password: string;
}
