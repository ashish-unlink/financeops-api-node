import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { FTP } from './interfaces/ftp.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProjectTemplate } from './project-template.entity';

@Injectable()
export class FTPService {

    constructor(
        @InjectRepository(ProjectTemplate)
        private projectTemplateRepository: Repository<ProjectTemplate>,
        private readonly FTPs: FTP[] = []
      ) {}

    create(ftp: FTP) {

    }

    findAll(): any {
        //return this.projectTemplateRepository.find();
    }

    findOne(id: string) {

    }

    update(id: string, ftp: FTP) {

    }
}

