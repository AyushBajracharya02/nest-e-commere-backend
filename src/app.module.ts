import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminUserModule } from './admin-user/admin-user.module';
import { UserModule } from './user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import Joi from 'joi';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        // DATABASE_TYPE: Joi.string()
        //   .valid(
        //     'mysql',
        //     'mariadb',
        //     'postgres',
        //     'cockroachdb',
        //     'sqlite',
        //     'mssql',
        //     'sap',
        //     'oracle',
        //     'cordova',
        //     'nativescript',
        //     'react-native',
        //     'sqljs',
        //     'mongodb',
        //     'aurora-mysql',
        //     'aurora-postgres',
        //     'expo',
        //     'better-sqlite3',
        //     'capacitor',
        //     'spanner',
        //   )
        //   .default('mysql'),
        DATABASE_URL: Joi.string().default('localhost'),
        DATABASE_PORT: Joi.number().default(3306),
        DATABASE_PASSWORD: Joi.string().default('root'),
        DATABASE_USERNAME: Joi.string().default('root'),
        DATABASE_NAME: Joi.string().default('test'),
      }),
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        // type: config.get('DATABASE_TYPE'),
        type: 'mysql',
        host: config.get('DATABASE_URL'),
        port: config.get('DATABASE_PORT'),
        password: config.get('DATABASE_PASSWORD'),
        username: config.get('DATABASE_USERNAME'),
        database: config.get('DATABASE_NAME'),
        synchronize: true,
        autoLoadEntities: true,
      }),
    }),
    AdminUserModule,
    UserModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
