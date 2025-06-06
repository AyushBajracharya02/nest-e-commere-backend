import { BaseUserDTO } from '@/common/dto/base-user.dto';
import { PickType } from '@nestjs/mapped-types';

export class SigninDTO extends PickType(BaseUserDTO, ['email', 'password']) {}
