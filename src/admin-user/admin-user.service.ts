import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AdminUser } from './admin-user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AdminUserService {
  constructor(
    @InjectRepository(AdminUser)
    private adminUserRepository: Repository<AdminUser>,
  ) {}
  getOne(id: number) {
    return this.adminUserRepository.findOneBy({ id });
  }
  getAll() {
    return this.adminUserRepository.find();
  }
}
