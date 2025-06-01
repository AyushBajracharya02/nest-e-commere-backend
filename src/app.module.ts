import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminUser } from '@/admin-user/admin-user.entity';
import { User } from '@/user/user.entity';
import { AdminUserModule } from './admin-user/admin-user.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      // type: process.env.DATABASE_TYPE ?? 'mysql',
      type: 'mysql',
      host: process.env.DATABASE_URL ?? 'localhost',
      // port: parseInt(process.env.DATABASE_PORT) ?? 3306,
      port: 3306,
      password: process.env.DATABASE_PASSWORD ?? 'root',
      username: process.env.DATABASE_USERNAME ?? 'root',
      database: process.env.DATABASE_NAME ?? 'nest_e_commerce',
      entities: [AdminUser, User],
      synchronize: true,
    }),
    AdminUserModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
