import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
require('dotenv').config();

/**
 * TypeORM DB config
 */
const dbconfig: TypeOrmModuleOptions = {
  type: 'cockroachdb',
  host: process.env.CRDB_HOST || 'localhost',
  port: +process.env.CRDB_PORT || 26257,
  username: process.env.CRDB_USER,
  password: process.env.CRDB_PASS,
  database: process.env.CRDB_DBNAME,
  logging: false,
  // entities: ['dist/**/*.entity.js'],
  synchronize: true,
  autoLoadEntities: true,
  dropSchema: false,
  ssl: true
};

/**
 * Make config for typeorm
 */
@Injectable()
export class DatabaseConfigFactory implements TypeOrmOptionsFactory {
  // constructor(private configService: ConfigService) {}
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return dbconfig;
  }
}
