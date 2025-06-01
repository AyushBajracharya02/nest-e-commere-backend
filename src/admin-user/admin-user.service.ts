import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminUserService {
  getOne(id: number) {
    return id;
  }
  getAll() {
    return [];
  }
}
