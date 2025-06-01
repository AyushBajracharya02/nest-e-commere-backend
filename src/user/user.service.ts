import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getOne(id: number) {
    return id;
  }
  getAll() {
    return [];
  }
}
