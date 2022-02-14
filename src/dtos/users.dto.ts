import { IsEmail, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  public email: string;

  @IsString()
  public username: string;

  @IsString()
  public password: string;

  @IsString()
  public role: string;

  @IsString()
  public first_name: string;

  @IsString()
  public last_name: string;
}

export class SignInUserDto {
  @IsString()
  @IsOptional()
  public username: string;

  @IsString()
  @IsOptional()
  public email: string;

  @IsString()
  public password: string;
}
