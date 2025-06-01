import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  controllers: [UserController],
  exports: [],
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService],
})
export class UserModule {}
