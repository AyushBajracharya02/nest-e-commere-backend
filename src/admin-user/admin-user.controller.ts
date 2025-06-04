import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AdminUserService } from './admin-user.service';
import { CreateAdminUserDTO } from './dto/create-admin-user.dto';

@Controller('admin-user')
export class AdminUserController {
  constructor(private adminUserService: AdminUserService) {}
  @Get('all')
  getAll() {
    return this.adminUserService.getAll();
  }
  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.adminUserService.getOne(id);
  }
  @Post('')
  create(@Body() dto: CreateAdminUserDTO) {}
}
