import { Module } from '@nestjs/common';
import { FTPService } from './ftp.service';
import { FTPController } from './ftp.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectTemplate } from './project-template.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProjectTemplate])
  ],
  providers: [FTPService],
  controllers: [FTPController],
  exports: [FTPService]
})
export class FTPModule {}
