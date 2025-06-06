import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupDTO } from './dto/signup.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(@Body() signupDto: SignupDTO) {
    return this.authService.signup(signupDto);
  }

  @Post('signin')
  signin() {
    return this.authService.signin();
  }
}
