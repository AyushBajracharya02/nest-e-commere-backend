import { Injectable } from '@nestjs/common';
import { SignupDTO } from './dto/signup.dto';
import { UserService } from '@/user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}
  async signup(signupDto: SignupDTO) {
    return await this.userService.create(signupDto);
  }
  signin() {}
}
