import { Injectable } from '@nestjs/common';
import { SignupDTO } from './dto/signup.dto';
import { UserService } from '@/user/user.service';
import { SigninDTO } from './dto/signin.dto';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}
  async signup(signupDto: SignupDTO) {
    const user = await this.userService.create(signupDto);
    return this.signin({ password: user.password, email: user.password });
  }
  signin(signinDto: SigninDTO) {}
}
