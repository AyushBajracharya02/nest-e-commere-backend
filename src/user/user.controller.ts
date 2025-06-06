import { Controller, Get, Param, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { QueryUserDTO } from './dto/query-user.dto';

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
  @Get('')
  query(@Query() query: QueryUserDTO) {
    return this.userService.query(query);
  }
}
