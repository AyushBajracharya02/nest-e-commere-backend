import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get('all')
  getAll() {
    return this.userService.getAll();
  }
  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.userService.getOne(id);
  }
}
