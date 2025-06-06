import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import bcrypt from 'bcrypt';
import { CreateUserDTO } from './dto/create-user.dto';
import { QueryUserDTO } from './dto/query-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRespository: Repository<User>,
  ) {}

  async getOne(id: number) {
    return await this.userRespository.findOne({ where: { id } });
  }

  async getAll() {
    return await this.userRespository.find();
  }

  async create(createUserDto: CreateUserDTO) {
    const { confirmPassword, ...userData } = createUserDto;
    const { email, password } = userData;
    if (password !== confirmPassword) {
      throw new BadRequestException('Passwords do not match.');
    }
    const existingUser = await this.query({ email });
    if (existingUser) {
      throw new BadRequestException('User with same email already exits.');
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ ...userData, password: hashedPassword });
    return await this.userRespository.save(user);
  }

  async query(query: QueryUserDTO) {
    const where = {};
    if (query.email) where['email'] = query.email;
    if (query.id) where['id'] = query.id;
    if (query.name) where['name'] = query.name;
    return this.userRespository.find({ where });
  }
}
