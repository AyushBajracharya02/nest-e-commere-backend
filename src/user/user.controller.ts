import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/create-user.dto';

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
  @Post('')
  create(@Body() createUserDto: CreateUserDTO) {
    return this.userService.create(createUserDto);
  }
}
