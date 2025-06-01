import { Controller, Get, Param } from '@nestjs/common';
import { AdminUserService } from './admin-user.service';

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
}
