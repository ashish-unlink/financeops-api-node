import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FTPModule } from './ftp/ftp.module';
import { FTPController } from './ftp/ftp.controller';
import { FTPService } from './ftp/ftp.service';

import { HealthController } from './health.controller';

import { ProjectTemplate } from './ftp/project-template.entity';

@Module({
  imports: [
            ConfigModule.forRoot(),
            TypeOrmModule.forRoot({
              type: 'mysql',
              host: 'localhost',
              port: 3307,
              username: 'root',
              password: '',
              database: 'rat',
              entities: [ProjectTemplate],
              synchronize: true,
            }),
            FTPModule
          ],
  //controllers: [AppController, FTPController, HealthController],
  //providers: [AppService],
})
export class AppModule {}
