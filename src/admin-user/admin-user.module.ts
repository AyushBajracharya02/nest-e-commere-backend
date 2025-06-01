import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminUser } from './admin-user.entity';
import { AdminUserController } from './admin-user.controller';
import { AdminUserService } from './admin-user.service';

@Module({
  controllers: [AdminUserController],
  exports: [],
  imports: [TypeOrmModule.forFeature([AdminUser])],
  providers: [AdminUserService],
})
export class AdminUserModule {}
